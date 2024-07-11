<h1>
    <span> Guia de Contribución</span>
</h1>

[![Star](https://img.shields.io/github/stars/jlescalonap/community_jobs_organizer?style=social)](https://github.com/jlescalonap/community_jobs_organizer)
[![Forks](https://img.shields.io/github/forks/jlescalonap/community_jobs_organizer?style=social)](https://github.com/jlescalonap/community_jobs_organizer/forks)
[![GitHub Issues](https://img.shields.io/github/issues/jlescalonap/community_jobs_organizer?style=social)](https://github.com/jlescalonap/community_jobs_organizer/issues/)

 Este es un proyecto hecho pa' la comunidad, así que siéntete libre de echarle un ojo y colaborar como quieras. Puedes meter mano no solo en tu propio Profile README, sino también añadir herramientas útiles en la carpeta utils, o mejorar la página de búsqueda de los READMEs con cambios en los archivos de la carpeta docs. Además, hay otras maneras en las que puedes poner tu granito de arena:
 
⚠️ Resolviendo, respondiendo o indicando **issues**

⭐ Adicionando a los favoritos (**star**) 

##  Contribuyendo en el directório "Community" 
Contribuir en el directorio 'Community' es una forma de apoyarnos. Puedes colaborar creando un Profile README con información sobre ti que quieras compartir con la comunidad. <br>

Para eso, puedes agregar: insignias que muestren tus habilidades; tarjetas con tus estadísticas en GitHub y proyectos en los que has trabajado, colaborado o en los que quieres que otros colaboren.  <br> 
Además, puedes incluir enlaces a tus desafíos de proyecto y artículos en la plataforma de Digital Innovation One. <br>
Inspírate viendo ejemplos en la carpeta community, revisa algunas herramientas en la carpeta utils y deja volar tu creatividad para crear el tuyo.

### 1) Haga un **Fork** de este Repositório
Accese a la página principal del repositório y haga click en el boton de "Fork" en la ezquina superior derecha de la página. <br>
> [!NOTE]  
> Un 'fork' en GitHub es una copia de un repositorio que cualquier usuario puede crear. <br>
> Para mas detalles, accese la documentación de GitHub: [Crear fork de un repositório](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

### 2) Clone localmente
Abra su Git Bash y escriba el comando `git clone` seguido de la URL de su fork para clonar su repositório localmente. Por ejemplo:
```bash
git clone https://github.com/jlescalonap/community_jobs_organizer.git
```
Presione enter, y una cópia de su fork en GitHub será creada localmente.

### 3) Cree una nueva **branch** 
Utilize el comando `git checkout -b` para crear y alternar para la nueva branch y nombrela como `feat/community/SU_USERNAME`
> Ejemplo: `git checkout -b feat/community/jlescalonap`

### 4) Cree su Profile README
 Dentro de la carpeta [`community`](https://github.com/jlescalonap/community_jobs_organizer/tree/main/community), cree un archivo en Markdown (extensión `.md`) y nombrela con el mismo nombre de su User en Github:

> Ejemplo: `community/jlescalonap.md`

#### 4.1) Desarrolle su propio Profile README
Para eso, puedes inspirarte en los ejemplos a continuación: [`Plantillas y Ejemplos`](https://github.com/durgeshsamariya/awesome-github-profile-readme-templates/tree/master/templates)

### 5) Adicione sus alteraciones al "staging area" 
Utilize el comando `git add community/SU_USERNAME.md` para adicionar sus alteraciones al Git.

### 6) Cree un Commit
Cree un commit y adicione el mensaje indicando la adicion de su perfil:
```bash
git commit -m "feat: add SU_USERNAME profile"
```
>[!IMPORTANT]
> Verifique la [`Convención de Commits`](https://github.com/digitalinnovationone/dio-lab-open-source/blob/main/CONTRIBUTING.md#conven%C3%A7%C3%A3o-de-commits) para escribir el mensaje de su commit siguiendo siempre las buenas prácticas.

### 7) Envie las Alteraciones para su Repositório Remoto
Envie las alteraciones realizadas en su repositório local para la branch `feat/community/SU_USERNAME` en su repositório remoto con el comando:
```bash
git push origin feat/community/SU_USERNAME
```

### 8) Cree un **Pull Request**.

>[!NOTE]
> En caso de que no sepa como crear un pull request, accese la documentación de GitHub: [Como crear una solicitud de pull
](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
  
## Convención de Commits 

| Tipo de Commit |Descripción                                                           | Ejemplo
| ---------------|----------------------------------------------------------------------|-----------
| `feat`         | Adiciona una nueva funcion al proyecto.                              | `feat: add USERNAME.md profile`
| `fix`          | Corrige un bug o problema del proyecto.                              | `fix: fixed issue fix#IssueNumber`
| `docs`         | Altera la documentación del proyecto.                                | `docs: update README.md`
| `style`        | Realiza alteraciones visuales, sin alterar la funcionalidad.         | `style: add EFFECTNAME to COMPONENT`
| `refactor`     | Realiza alteraciones en el codigo que no alteran su funcionalidad.   | `refactor: refactor at CLASSNAME`
| `test`         | Agrega o modifica los tests del proyecto.                            | `test: add unit test for UserService`
