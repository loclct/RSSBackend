/** GET Methods */
/**
 * @openapi
 * '/api/user/{username}':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get a user by username
 *     parameters:
 *      - name: username
 *        in: path
 *        description: The username of the user
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
