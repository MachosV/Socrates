package aggelia

import (
	"context"
	"dbmanager"
	"log"
	"middleware"
	"mux"
	"net/http"
	"responses"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

/*
Aggelia struct
holds information about the car being published
*/
type Aggelia struct {
	ID    string   `json:"id"`
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
		responses.WebError(w, "Invalid method", http.StatusBadRequest)
		return
	}
	body, err := r.GetBody()
	if err != nil {
		responses.WebError(w, "Malformed body", http.StatusBadRequest)
		return
	}
	_ = body
}

func retrieveAggelia(w http.ResponseWriter, r *http.Request) {
	collection := dbmanager.GetDbAggelies()
	log.Println(collection.Name())
	aggelia := Aggelia{}
	id := r.URL.Query().Get("id")
	docID, _ := primitive.ObjectIDFromHex(id)
	err := collection.FindOne(context.TODO(), bson.M{"_id": docID}).Decode(&aggelia)
	if err != nil {
		switch err.Error() {
		case "mongo: no documents in result":
			responses.SendResponse(w, map[string]string{
				"data": "not found",
			})
		}
	} else {
		responses.SendResponse(w, aggelia)
	}
}

func updateAggelia(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

func deleteAggelia(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}
