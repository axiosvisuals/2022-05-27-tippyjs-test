# Svelte template

## To get started

### Using degit

`degit` is a package that makes copies of a git repository's most recent commit. This allows for generating the scaffolding from this template directly from the command line.

Since this is a private repository, you'll need to set up SSH keys with your Github account. More information on how to do that [here](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

To install degit: `npm install -g degit`

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit axiosvisuals/svelte-template --mode=git test-app
cd test-app
```

### Using 'Use this template'

Click the `Use this template` button above and follow the instructions prompted by GitHub.

### Post-clone setup

In your local repo:

- Install the dependencies: `npm install`
- ~~Update `project.config.json` with your project's title and slug (TODO: make this automatic)~~
- Ctrl+F the term `[insert slug]` and replace it with your project slug. Also update the page title by ctrl+F'ing `[insert name]` and replacing it with a project name. (Or, you can manually update these in `public/index.html` and `project.config.json`.)
- Start the development server: `npm run dev`
- Navigate to [localhost:5000](http://localhost:5000). The app should run and update on changes.

## Google Docs/Archie ML for copy

- Create a Google Doc or Sheet
- Click Share button -> advanced -> Change... -> to "Anyone with this link"
- In the address bar, grab the ID - eg. ...com/document/d/**1IiA5a5iCjbjOYvZVgPcjGzMy5PyfCzpPF-LnQdCdFI0**/edit
  paste in the ID above into `project.config.json`, and set the filepath to where you want the file saved
- If you want to do a Google Sheet, be sure to include the gid value in the url as well
- Running `npm run fetch-doc` at any point (even in new tab while server is running) will fetch the latest from all Docs and Sheets.
- Make sure any elements that include this copy use [@html](https://svelte.dev/tutorial/html-tags), so links/styling from the google doc can be properly incorporated

## Publishing

- Make sure your changes are committed to `main`
- `gulp publish` will push to `main`, build the app, and then deploy the built version to the S3 bucket specified in `project.config.json`
  - You'll be prompted to see if you want to generate fallbacks (for this to work, you'll need to have [localhost:5000](http://localhost:5000) running in another tab), they'll go in `public/fallbacks`
    - If you do not want to include an element in the fallback images, you can add `class="hide-in-static"` to it to exclude it from the static image. Elements with this class added will be set to `display: none`.

## Batch publishing 

### Javascript

At times you will need to publish multiple versions of a Svelte project, most of these instances will be with different annotations. 

To show the different annotations using only one web project, pass a querystring parameter. The following snippet reads the querystring and allows access to a function to parse it. 

```
  const queryString = window.location.search.slice(1);
  let searchParams = new URLSearchParams(queryString)

  // get parameter
  searchParams.get('desired_key_here')
```

The querystring parameter has to directly manipulate or impact the data being visualized. [See the airport waiting times beeswarm](https://github.com/axiosvisuals/2022-04-06-airport-waiting-times), for an example. 

### Project setup

In `project.config.json` add two new properties in the `project` object along with `name` and `slug`: `series` and `queryStringVar`. The value of `series` should be an array of the querystring parameters you want to loop through. The value of `queryStringVar` should be whatever variable the project looks for. For example in the url `axios.com/?local=Twin Cities`, the value should be local. 

After adding the `series` array, run `npm run dev` to get a local serving running as usual. Run `gulp publish-batch` to start the batch publishing process. This gulp task takes fallbacks for each item in the series, publishes them to S3 in individual folders and writes a csv file to `./public/fallbacks/output.csv` containing the series item name, embed link and social fallback link. 


