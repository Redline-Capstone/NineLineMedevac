//Created by Joshua Schoonover and Rob Payne

application props updated to use heroku

//--------------------------------------
endpoints:
Dispatcher Controller:
Get /requests -get all
Get /requests/{id} -get by id, returns iterable<requests>
Patch /requests/{id} -patch by id,
                    accepts key-value pairs of:
                        responder : name as string
                        completed : boolean as string
                        security / line6 : string
                        hlzMarking / line7 : string
                        nationality / line8 : string
                        nbc / line9 : string
                    returns updated request

Responder Controller:
Get /responder/{name} - get all requests by responder id, returns iterable<requests>
Get /responder/{id} - returns responder obj
get responder - returns all responders
Post /responder - takes responder obj, returns saved responder

Requester Controller:
Post /nineline - saves a nineline to the database, returns request


//--------------------------------------
NineLine:
    private String location;
    private String callSign;
    private String patientUrgency;
    private String specialEquipment;
    private String patientType;
    private String security;
    private String hlzMarking;
    private String nationality;
    private String nbc; //line9; //special

Request extends NineLine:
    private long id //table id
    private boolean completed
    private String responder //key to responder table when assigned

Responder
    private long id //table id
    private String name


