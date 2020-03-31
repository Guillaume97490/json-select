const usersJson = require("../views/users.json");
/**
 * The index controller
 *
 * @controller indexController
 */
class indexController {
  /**
   * 1 Home page with a list of names json
   * 
   * @static
   * @param {object} req Express request object
   * @param {object} res Express response object
   * @memberof indexController
   */
  static home(req, res) {
    const usersList = {};
    Object.keys(usersJson).forEach(i => {
      // select only name of the user
      usersList[i] = {
        nom: usersJson[i].nom,
        prenom: usersJson[i].prenom
      };
    });
    res.render("index", {
      title: "Express",
      users: usersList
    });
  }

  /**
   * Get the user datas with a id
   * 
   * @static
   * @param {object} req Express request object
   * @param {string} req.params.id id of user
   * @param {object} res Express response object
   * @memberof indexController
   * @return {object} The user datas object
   */
  static getOneUser(req, res) {
    const userId = req.params.id;
    const user = usersJson[userId];
    res.send(user);
  }
}
module.exports = indexController;
