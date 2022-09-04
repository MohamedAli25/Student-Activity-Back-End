export default class UniversityController {
  static index(req, res) {
    console.log("index");
  }

  static create(req, res) {
    console.log("create");
  }

  static store(req, res) {
    console.log("store");
  }

  static show(req, res) {
    const universityId = req.params.universityId;
    console.log("show");
    console.log("University ID: " + universityId);
  }

  static edit(req, res) {
    console.log("edit");
  }

  static update(req, res) {
    console.log("update");
  }

  static destroy(req, res) {
    console.log("destroy");
  }
}
