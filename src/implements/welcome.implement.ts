/**
 *Las clases de los implementso se encargara de conectarse con la DB cada archivo seria un modulo ejemplo , Clientes ,Usuarios etc 
 * y dentro de cada clase estarán los métodos y validaciones necesarios par  poder trabajar como create get update etc
 *
 * @export
 * @class Welcome
 */
 export class WelcomeImplement {
    /**
     *Este método salida, cada método recibirá la conexión la cual es un modulo import mysql from 'mysql';
     *
     * @param {*} connection
     * @param {string} saludo
     * @memberof Welcome
     */
    public greet(connection: any, saludo: string) {
  
      //ejemplo de conexion 
  
      // let query: string = 'select * from x_table'
      // return connection.query(query);
      console.log(connection)
      return saludo
    }
  }