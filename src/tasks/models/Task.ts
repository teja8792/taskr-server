export default class Task {
  _data = {
    status: "",
    pickup: {},
    drop: {},
    has_pickup: false,
    has_drop: false,
    meta_data: {},
    auto_assigned: false,
    fleed_id: null,
    geofence: null,
    tags: null
  };

  get_status() {
    return this._data.status;
  }

  set_status(s: string) {
    this._data.status = s;
  }

  change_status(to: string) {}

  is_unassigned() {}
}
