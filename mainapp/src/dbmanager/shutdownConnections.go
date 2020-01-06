package dbmanager

import "context"

/*
ShutdownDbmanager function
disconnects from the mongo db
*/
func ShutdownDbmanager() {
	client.Disconnect(context.TODO())
}
