import React from 'react';

export default function AboutPage() {
  return (
    <div>
      <h1>About the page</h1>
      <div>- Phone catalog built with MERN Stack (MongoDB, Express, React, NodeJS)</div>
      <div>- Use of REDUX</div>
      <div>- CRUD operations are implemented</div>
      <div>- Includes filtering</div>
      <div>- Use of toasts to inform what action was triggered</div>
      <div>- Responsive design</div>
      <div>
        - Use of conditional modals and loading:
        <p>
          -- If you View/Edit a phone from phones page (/phones), the url will change
          accordingly and the used data will come from the already fetched list. The
          component will be presented into a modal.
        </p>
        <p>
          -- Otherwise, if you access directly the url (/phones/.../edit or
          /phones/.../details) you do not want to fetch all the list, so it will search by
          phone id. The component will be presented in full screen.
        </p>
      </div>
      <div>- Containerized with docker and hosted on AWS EC2</div>
    </div>
  );
}
