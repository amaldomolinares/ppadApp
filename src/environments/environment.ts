// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    // ulr server
    site_url :  'http://10.1.20.25/API/',

    // endponits login
    User_login: 'login',
    User_register: 'registration',

    // endpoints vehicles
    site_car: 'https://vindecoder.p.rapidapi.com/decode_vin?vin=',
    get_list_vehicles:          'Vehicles',
    get_vehicle_by_vinNumber:   'Vehicle',
    get_Vehicle_From_Api:       'NewVehicle',
    Update_vehicle_by_id:       'UpdateVehicle',
    Create_Vehicle:             'NewVehicle',

    // endpoints order
    get_list_orders:         'Orders',
    get_list_order_by_id:    'Order',
    post_add_new_order:      'NewOrder',
    Update_order_by_id:      'UpdateOrder',

    // endpoints taks
    post_add_new_task:      'NewTask',
    get_task_by_taskid:     'Task',
    Update_task_by_name:    'UpdateTask',

    // endpoints notes
    post_add_note_task:     'NewNote',

    // endpoints supplier
    get_list_suppliers:         'Suppliers',
    get_list_supplier_by_id:    'Supplier',
    post_add_new_supplier:      'NewSupplier',
    Update_supplier_by_id:      'UpdSupplier',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
