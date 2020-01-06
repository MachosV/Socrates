package middleware

import "net/http"

func Responder() Middleware {
	return func(h http.HandlerFunc) http.HandlerFunc {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			defer respond(w, r)
			h.ServeHTTP(w, r)
		})
	}
}

func respond(w http.ResponseWriter, r *http.Request) {

}
