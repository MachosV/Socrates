package responses

import (
	"encoding/json"
	"net/http"
)

type response struct {
	Data   interface{} `json:"data"`
	Status int         `json:"status"`
}

/*
SendResponse function
will send a json response back to the client
*/
func SendResponse(w http.ResponseWriter, r *http.Request, data interface{}) {
	response := response{data, http.StatusOK}
	jsonresponse, _ := json.MarshalIndent(response, "", "\t")
	w.Write(jsonresponse)
}
