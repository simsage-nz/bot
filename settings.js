
// the settings for this application - no trailing / on the base_url please
settings = {
    // the service layer end-point, change "localhost:8080" to ...
    base_url: 'http://localhost:8080/api',
    // api version of ws_base
    api_version: 1,
    // web sockets platform endpoint for comms
    ws_base: 'http://localhost:8080/ws-api',
    // the organisation's id to search
    organisationId: "<organisation>",
    // the knowledge bases inside this organisation to use
    kbList: [{kbId: "<kb>", sid: "<sid>"}],
};

