package main

import (
	_ "crudAPI/aggelia"
	"dbmanager"
	"log"
	"mux"
	"net/http"
	"os"
	"os/signal"
)

func main() {
	go func() {
		sigchan := make(chan os.Signal, 10)
		signal.Notify(sigchan, os.Interrupt)
		<-sigchan
		log.Println("Closing database connections")
		dbmanager.ShutdownDbmanager()
		log.Println("Exiting")
		os.Exit(0)
	}()
	log.Println("Go server starting")
	http.ListenAndServe(":8000", mux.GetMux())
}
