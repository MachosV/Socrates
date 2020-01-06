package responses

import (
	"encoding/json"
	"net/http"
)

type jsonError struct {
	Msg    string `json:"msg"`
	Status int    `json:"status"`
}

/*
WebError function
returns a json error
*/
func WebError(w http.ResponseWriter, msg string, status int) {
	err := jsonError{msg, status}
	response, _ := json.MarshalIndent(err, "", "\t")
	w.Write(response)
}
