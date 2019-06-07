// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    // ulr server
    site_url :  'http://10.11.30.112/',

    // endponits login
    jwt_url: 'PPACD_04/users/ppacd/login/',

    // endpoints vehicles
    site_car: 'https://vindecoder.p.rapidapi.com/decode_vin?vin=',
    get_list_vehicles:          'PPACD_04/Api_V/Vehicle/list',
    get_vehicle_by_vinNumber:   'PPACD_04/Api_V/Vehicle/listbyid',
    get_Vehicle_From_Api:       'PPACD_04/Api_V/Vehicle/listbyid',

    // endpoints order
    get_list_orders:         'PPACD_04/Api_O/Order/list',
    get_list_order_by_id:    'PPACD_04/Api_O/Order/listbyid',
    post_add_new_order:      'PPACD_04/Api_O/Order/create',
    Update_order_by_id:      'PPACD_04/Api_O/Order/OrderUp',

    // endpoints taks
    post_add_new_task: 'PPACD_04/Api_T/Task/Create',
    get_task_by_taskid: 'PPACD_04/Api_T/Task/listbyTId',
    Update_task_by_name: 'PPACD_04/Api_T/Task/TaskUp',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
