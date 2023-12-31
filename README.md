<h1>nucampsite-react - CRA tooling redux template</h1>

<h2>Purpose</h2>
<ul>
    <li>Use of npx create-next-app (CRA) as my tooling.</li>
    <li>Use of Node</li>
    <li>Show use of later versions of JS - Arrow Functions, Implicit returns, .map(), destructuring arrays and objects</li>
    <li>Basic React features - JSX, props, components</li>
    <li>Show use of slices - Group of Data</li>
    <li>Use of Hooks - useState() </li>
    <li>React Router - Setting up SPA</li>
    <li>React Router - useParams for /directory/:campsiteId</li>
</ul>

<h2>Setup</h2>

<ol>
    <li>mkdir nucampsite && cd nucampsite</li>
    <li>git commands for section "…or create a new repository on the command line"</li>
    <li>npx create-react-app . --template redux</li>
    <li>npm install bootstrap@5.1.3 bootstrap-social@5.1.1 font-awesome@4.7.0 formik@2.2.9 react-router-dom@6.2.1 react-spring@9.4.5-beta.1 reactstrap@9.0.1 redux-logger@3.0.6 typeface-lobster@1.1.13 typeface-open-sans@1.1.13</li>
    <li>** I updated to latest bootstrap 5.3.1 --noted just incase</li>
    <li>npm start</li>
    <li>removed reportWebVitals and starter code from Index and App.js</li>

</ol>

<h2>Components</h2>
<ul>
    <li>Standalone
        <ul>
            <li>Header - basic site header</li>
            <li>Footer - basic site footer</li>
        </ul>
    </li>
    <li>
        Layered Components
        <ul>
            <li>CampsiteCard - Card img, overlay, text</li>
            <li>CampsitesList - Uses Array of Objects CAMPSITES to list out all cards and determines layout</li>
        </ul>
    </li>    
</ul>

<h2>React Router</h2>
<ul>
    <li><BrowserRouter>Parent router, enables react router in our aoo by wrapping around <App>.  Uses HTML5 History API to let us move back and forth in browsing history.  App.js  </li>
    <li><Route> Renders the UI for a specific path App.js</li>
    <li><Routes>Used to group <Route> components together.  Handles directing requests to <Route> Just like a JS switch. App.js</li>
    <li><Link>Creates links to a path, renders as <a> Use this inside of react app instead of <a> so it goes through React Router</li>
    <li><NavLink> Special version of <Link>, know one in a group is selected.  Useful for styling active link and assistive technology.</li>
</ul>
