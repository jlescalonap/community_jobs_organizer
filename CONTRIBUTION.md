<h1>
    <span> Guia de Contribución</span>
</h1>

 Este es un proyecto hecho para la comunidad, así que siéntete libre de contribuir. Unas formas de contribuir es agregar tu ejemplo de Profile README,
 Además, también puedes contribuir:
 
⚠️ Resolviendo, respondiendo o indicando **issues**

⭐ Adicionando a los favoritos (**star**) 

##  Contribuyendo en el directório "Community"
La contribución en el directorio "Community" es una de las formas de comenzar tu contribución en este proyecto. Puedes colaborar creando un Profile README con información sobre ti que desees compartir con la comunidad.

Para ello, puedes insertar: insignias indicando tus habilidades; tarjetas con tus estadísticas en GitHub y proyectos que has creado, en los que has colaborado o en los que deseas que otras personas colaboren. 

Además, también puedes insertar enlaces a tus proyectos.
Inspírate consultando los ejemplos en la carpeta community, revisa algunos utilitarios en la carpeta utils y usa tu creatividad para crear el tuyo.

### 1) Haga un **Fork** de este Repositório
Accese la página principal del repositório y haga click en el boton "Fork" en la esquina superior derecha de la pangina.
> [!NOTE]  
> Un "fork" en GitHub es una cópia de un repositório que puede ser creada por cualquier usuário. <br>
> Para más detalles, revise la documentación de GitHub: [Crear fork de un repositório](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

### 2) Clone localmente
Abra su Git Bash y digite el comando `git clone` seguido del URL de su fork para clonar su repositório localmente. <br> Por exemplo:
```bash
git clone https://github.com/SEU_USERNAME/community_jobs_organizer.git
```
Presione enter, y una cópia de su fork en GitHub será creada localmente.

### 3) Cree una nueva **branch** 
Utilize el comando `git checkout -b` para criear y alternar para la nueva branch y nombrela como `feat/community/SU_USERNAME`
> Exemplo: `git checkout -b feat/community/jlescalonap`

### 4) Cree su Profile en README
 Dentro de la carpeta [`community`](https://github.com/jlescalonap/community_jobs_organizer/tree/main/community), cree un archivo en Markdown (extensión `.md`) y nombrelo con el mismo nombre de su user en Github:

> Exemplo: `community/jlescalonap.md`

#### 4.1) Desarrolle su Profile en README
Para eso, puedes inspirarte en los ejemplos del siguiente link: [`ver ejemplos`](https://github.com/durgeshsamariya/awesome-github-profile-readme-templates/tree/master/templates).

### 5) Adicione sus alteraciones al "area de staging"
Utilize el comando `git add community/SU_USERNAME.md` para adicionar su alteración (en este caso el archivo markdown recién creado)  a la "area de staging" en Git.

O simplemente use `git add .` que adicionara todo lo que haya sido adicionado o alterado recientemente.

### 6) Cree un Commit
Cree un commit y adicione un mensaje indicando la adición de su perfil:
```bash
git commit -m "feat: add SU_USERNAME profile"
```
>[!IMPORTANT]
> Verifique la [`Convención de Commits`](https://www.conventionalcommits.org/es/v1.0.0/#especificaci%c3%b3n) para escribir el mensaje de su commit de manera clara y siguiendo siempre las buenas prácticas.

### 7) Envie las Alteraciones para su Repositório Remoto
Envie las alteraciones realizadas en su repositório local para la branch `feat/community/SU_USERNAME` en su repositório remoto con el comando:
```bash
git push origin feat/community/SU_USERNAME
```
>[!WARNING]
> En caso de que hayas creado tu archivo directamente en el repositório remoto en Github, este proceso no será necesário.

### 8) Cree un **Pull Request**.

Preste atención a la hora de seguir las siguientes instrucciones para su contribución, principalmente:
- Su PR debe modificar solo el arquivo community/SU_USERNAME.md (Revise la pestaña "Files changed");
- El nombre de este archivo debe ser exactamente igual al nombre de tu usuário en Github.

>[!NOTE]
> En caso de que no sepas como crear un pull, revise la documentación de Github: [Como crear una solicitud de pull
](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

Este procedimiento es para la adición de su profile al proyecto, en caso de que su contribución sea otra el procedimiento es el mismo substituyendo los nombres de los directorios y archivos por los pertinentes.
    
    
## Convención de Commits 

| Tipo de Commit |Descripción                                                           | Ejemplo
| ---------------|----------------------------------------------------------------------|-----------
| `feat`         | Agrega una nueva funcionalidad al proyecto.                          | `feat: add USENAME.md profile`
| `fix`          | Corrige un bug o problema en el projeto.                             | `fix: fixed issue fix#IssueNumber`
| `docs`         | Altera la documentación do projeto.                                  | `docs: update README.md`
| `style`        | Realiza cambios en la apariencia, sin alterar la funcionalidad.      | `style: add EFFECTNAME to COMPONENT`
| `refactor`     | Realiza cambios en el codigo que no alteran la funcionalidad.        | `refactor: refactor at CLASSNAME`
| `test`         | Adiciona o modifica los tests del proyecto.                          | `test: add unit test for UserService`
