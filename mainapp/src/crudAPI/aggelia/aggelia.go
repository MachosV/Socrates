package aggelia

import (
	"middleware"
	"mux"
	"net/http"
	"responses"
)

/*
Aggelia struct
holds information about the car being published
*/
type Aggelia struct {
	Make  string   `json:"make"`
	Model string   `json:"model"`
	Tags  []string `json:"tags"`
}

func init() {
	mux.GetMux().HandleFunc("/api/create/aggelia", middleware.WithMiddleware(createAggelia,
		middleware.Time(),
	))
	mux.GetMux().HandleFunc("/api/retrieve/aggelia", middleware.WithMiddleware(retrieveAggelia,
		middleware.Time(),
	))
	mux.GetMux().HandleFunc("/api/update/aggelia", middleware.WithMiddleware(updateAggelia,
		middleware.Time(),
	))
	mux.GetMux().HandleFunc("/api/delete/aggelia", middleware.WithMiddleware(deleteAggelia,
		middleware.Time(),
	))
}

func createAggelia(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		responses.WebError(w, r, "Invalid method", http.StatusBadRequest)
		return
	}
	body, err := r.GetBody()
	if err != nil {
		responses.WebError(w, r, "Malformed body", http.StatusBadRequest)
		return
	}
	_ = body
}

func retrieveAggelia(w http.ResponseWriter, r *http.Request) {
	strArray := []string{"Black", "Diesel", "1400"}
	aggelia := Aggelia{
		"Mini",
		"ONE D",
		strArray}
	responses.SendResponse(w, r, aggelia)
}

func updateAggelia(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

func deleteAggelia(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}
