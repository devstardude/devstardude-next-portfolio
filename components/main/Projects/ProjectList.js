const projects = [
  {
    name: "Visitereum",
    description:
      "Track your visited places on Blockchain with Decentralised identity and so much more...",
    ribbon: "Blockchain",
    highlight: true,
    tech: [
      "Next.js",
      "Blockchain",
      "TypeScript",
      "IPFS",
      "Ceramic",
      "TailwindCSS",
    ],
    image: `https://camo.githubusercontent.com/55f05e8f7f912b096e14119e8bcb4b7e7a20a40557b1751a07b8484ad2d61081/68747470733a2f2f692e6962622e636f2f7451664b7142302f696d6167652e706e67`,
    projectLink: "https://visitereum.vercel.app/",
    githubLink: "https://github.com/devstardude/visitereum",
    youtubeLink: "https://www.youtube.com/embed/cGoyAaqmhsw",
    features: (
      <div>
        <p>
          🤍 Track and store visited places details in Polygon Blockchain.{" "}
          <br />
          🤍 Authentication by Ceramic Decentralised Identity, manage your DID
          profile within the app.
          <br />
          🤍 Automatic place search and Map rendering <br />
          🤍 Earn NFTs based on the types of places you visit, and share them on
          social platforms such as Twitter, LinkedIn, Reddit, and WhatsApp, or
          view on OpenSea.
          <br />
          🤍 Save data assets in a decentralised way into IPFS
          <br />
          🤍 Claim exclusive merchandise with your NFTs. (In development)
          <br />
          🤍 Responsive and Fast
          <br />
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          ⚙ Frontend <br />
          &emsp; • Next.js with TypeScript
          <br />
          &emsp; • Material UI
          <br /> &emsp; • TailwindCSS
          <br />
          ⚙ Blockchain
          <br />
          &emsp; • Solidity for writing smart contracts
          <br />
          &emsp; • IPFS for decentralized storage
          <br />
          &emsp; • Ceramic DID
          <br />
          &emsp; • Thirdweb (To Connect wallet, contract, fetch and mint NFTs)
          <br />
          ⚙ Deployment
          <br />
          &emsp; • Frontend on Vercel and Smart contracts on Polygon Mumbai{" "}
          <br />
        </p>
      </div>
    ),
  },
  {
    name: "Docthereum",
    description:
      "A Web3 decentralized app to maintain anonymous medical reports and aids in seamless healthcare across the globe.",
    ribbon: "Blockchain",
    highlight: true,
    tech: ["React", "Blockchain", "Chainlink", "IPFS", "Graph", "TailwindCSS"],
    image: `https://i.ibb.co/Cbx1dbk/new-dp.png`,
    projectLink: "https://docthereum.web.app/",
    githubLink: "https://github.com/devstardude/Docthereum",
    youtubeLink: "https://www.youtube.com/embed/uwM1e-83o0A",
    features: (
      <div>
        <p>
          🤍 Docthereum stores records over a decentralized network and records
          cannot be tampered with. <br />
          🤍 It maintain the records linked to patients' Ethereum's public
          address, hence providing anonymity to the patient. And the identity of
          the patient remains confidential.
          <br />
          🤍 Since, it maintain patients' reports anonymously, and It can't be
          traced back to the patient himself, therefore reports can be provided
          to researchers to aid in their studies. <br />
          🤍 In Docthereum we have built a Decentralized autonomous organization
          where funds can be utilized by Decentralised voting and everyone who's
          a member gets a say in it. You can become part of Docthereum DAO just
          by Minting a free NFT inside the app.
          <br />
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          ⚙ Frontend <br />
          &emsp; • React.js with Hooks
          <br />
          &emsp; • Material UI
          <br /> &emsp; • TailwindCSS
          <br />
          ⚙ Blockchain
          <br />
          &emsp; • Solidity for writing smart contracts
          <br />
          &emsp; • IPFS for decentralized storage
          <br />
          &emsp; • The Graph for indexing events and providing it to researchers
          <br />
          &emsp; • Chainlink for verification
          <br />
          ⚙ Deployment
          <br />
          &emsp; • Frontend on Firebase and Smart contracts on Rinkby <br />
        </p>
      </div>
    ),
  },
  {
    name: "Visité - A Place Tracker",
    description:
      "Track places you have visited, or wishlist (And get Badges). Socialize with other users by Liking their shared places and posts. Many more real world features included.",
    ribbon: "mern",
    highlight: true,
    tech: [
      "MERN",
      "React",
      "Node",
      "MongoDB",
      "Firebase",
      "Bootstrap",
      "Material-UI",
    ],
    image: `https://i.ibb.co/VJVhjj1/visite-display-pic-1.png`,
    projectLink: "https://visite-place-tracker.web.app/",
    githubLink: "https://github.com/devstardude/Visite-place-tracker",
    youtubeLink: "https://www.youtube.com/embed/sncySXQQKFQ",
    features: (
      <div>
        <p>
          🤍 Share Places and get badges (Visible to the world) <br />
          🤍 Wishlist Places (Only visible to the user) <br />
          🤍 Share Posts in Markdown Format <br />
          🤍 Like other Profiles and Send Messages
          <br />
          🤍 Automatic search any place around the world
          <br />
          🤍 Render Map of the address
          <br />
          🤍 Public chatbox that shows real-time messages
          <br />
          🤍 Admin only protected route that can post global blogposts
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          ⚙ Frontend <br />
          &emsp; • React.js with Hooks
          <br />
          &emsp; • Material UI
          <br /> &emsp; • Bootstrap
          <br />
          ⚙ Backend
          <br />
          &emsp; • Node.js with Express
          <br />
          ⚙ Database
          <br />
          &emsp; • MongoDB with Mongoose [For User Data]
          <br />
          &emsp; • Cloud Firestore (For Global Realtime chatbox and Admin
          Blogposts)
          <br />
          ⚙ Deployment
          <br />
          &emsp; • Frontend on Firebase and Backend on Heroku <br />
        </p>
      </div>
    ),
  },
  {
    name: "NFT Collection",
    description:
      "A Next.js with TypeScript Dapp to fetch user's NFT and collection's NFTs from multiple collections.",
    ribbon: "Next.js+TS",
    highlight: true,
    tech: ["Next.js", "TypeScript", "Alchemy", "TailwindCSS", "Thirdweb"],
    image: `https://i.ibb.co/sj5vQzZ/Screenshot-2022-09-14-011254.png`,
    projectLink: "https://nft-collection-learnweb.vercel.app/",
    githubLink: "https://github.com/devstardude/Nft-collection",
    youtubeLink: "https://www.youtube.com/embed/JjRruxXGRTM",
    features: (
      <div>
        <p>
          🤍 Fetch NFTs owned by the user from multiple NFTs collections.
          <br />
          🤍 Fetch all NFTs minted in an NFTs collections.
          <br />
          🤍 Pagination (Initial limit is 20 NFTs, user can see next 20 NFTs by
          clicking on show more). <br />
          🤍 Detect current Network and show a warning when not connected to the
          mentioned network.
          <br />
          🤍 Users can share owned NFTs on Social platforms such as Twitter,
          LinkedIn, Reddit, and WhatsApp.
          <br />
          🤍 Light and Dark mode with responsive website.
          <br />
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          ⚙ Frontend <br />
          &emsp; • Next.js with TypeScript
          <br />
          &emsp; • TailwindCSS
          <br />
          ⚙ Blockchain
          <br />
          &emsp; • Alchemy API to fetch NFTs from OpenSea
          <br />
          &emsp; • Thirdweb for wallet connection and network detection
          <br />
          ⚙ Deployment
          <br />
          &emsp; • Deployed on Vercel <br />
        </p>
      </div>
    ),
  },
  {
    name: "Shopping cart",
    description:
      "A React, Redux, and TypeScript Project to add and delete items from the cart, also shows realtime overall price.",
    ribbon: "React",
    tech: ["React", "Redux", "TypeScript", "Redux-thunk"],
    image: `https://i.ibb.co/7xcbgkD/image.png`,
    projectLink: "https://shopping-cart-sable.vercel.app/",
    githubLink: "https://github.com/devstardude/shopping-cart",

    youtubeLink: "null",
    features: (
      <div>
        <p>
          🤍 Add or Remove Furniture with a click of button <br />
          🤍 Price calculated automatically <br />
          🤍 Fetch Data from public external Furniture API <br />
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          ⚙ Frontend <br />
          &emsp; • React.js,
          <br />
          &emsp; • Redux
          <br />
          &emsp; • Html, Css, TypeScript
          <br />
          ⚙ Deployment
          <br />
          &emsp; • Frontend on Vercel <br />
        </p>
      </div>
    ),
  },
  {
    name: "Burger Blast",
    description:
      "A React, Redux, and Firebase Project to make delicious burger interactively and submit your order details to the server.",
    ribbon: "React",
    tech: [
      "React",
      "Redux",
      "React-lifecycles",
      "Firebase",
      "Class-based",
      "Redux-thunk",
      "Material-UI",
    ],
    image: `https://i.ibb.co/frvJLvf/burger.png`,
    projectLink: "https://burger-blast.web.app/",
    githubLink: "https://github.com/devstardude/Burger-Blast",

    youtubeLink: "https://www.youtube.com/embed/LrZ9xbln95Y",
    features: (
      <div>
        <p>
          🤍 Build tasty looking burger in realtime <br />
          🤍 Add or Remove ingredient with a click of button <br />
          🤍 Price calculated automatically <br />
          🤍 Submit your order to online server
          <br />
          🤍 See your previous orders
          <br />
          🤍 Firebase authentication and custom Validation
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          ⚙ Frontend <br />
          &emsp; • React.js - Class based with Lifecycles
          <br />
          &emsp; • Redux
          <br />
          &emsp; • Html, Css, Javascript
          <br />
          &emsp; • Material UI
          <br />
          ⚙ Database
          <br />
          &emsp; • Firebase Realtime Database
          <br />
          ⚙ Deployment
          <br />
          &emsp; • Frontend on Firebase <br />
        </p>
      </div>
    ),
  },
  {
    name: "Shop Sharer",
    description:
      "An app to make shopping lists from multiple online stores, and share the list with your friends to manage the list from both sides.",
    ribbon: "React",
    tech: [
      "React",
      "Firebase",
      "Firestore",
      "React-hooks",
      "Google-Sign-in",
      "Image-upload",
    ],
    image: `https://i.ibb.co/rkFv847/shop.png`,
    projectLink: "https://shopsharer009.web.app/",
    githubLink: "https://github.com/devstardude/Shop-Sharer",

    youtubeLink: "https://www.youtube.com/embed/A0uQHsp4ViU",
    features: (
      <div>
        <p>
          🤍 Make Shopping list from any Online Stores <br />
          🤍 Share that list with other Peoples <br />
          🤍 Automatic screenshot of product added as item&apos;s image <br />
          🤍 Mutually manage list by shared people
          <br />
          🤍 Google Authentication and Validation
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          ⚙ Frontend <br />
          &emsp; • React.js with Hooks
          <br />
          &emsp; • Html, Css, Javascript
          <br />
          ⚙ Database
          <br />
          &emsp; • Cloud Firestore <br />
          ⚙ Deployment
          <br />
          &emsp; • Frontend on Firebase
          <br />
        </p>
      </div>
    ),
  },
  {
    name: "Classy Blog",
    description:
      "A Featured Blog Post Project to Create, Edit, Delete posts with Integrated Authentication,profile management and markdown",
    ribbon: "MERN",
    tech: [
      "MERN",
      "React",
      "Node",
      "Express",
      "Ejs",
      "MongoDB",
      "Bootstrap",
      "Image-upload",
      "Express-session",
      "Passport",
    ],
    image: `https://i.ibb.co/bvgxwVf/blog.png`,
    projectLink: "https://classyblog-react.web.app/",
    githubLink: "https://github.com/devstardude/Classy-Blog-MERN",
    youtubeLink: "https://www.youtube.com/embed/l7fnlKt_MwY",
    features: (
      <div>
        <p>
          🤍 Add Markdown enabled blogposts from your profile <br />
          🤍 Dedicated User management system
          <br />
          🤍 Beautiful UI <br />
          🤍 Remove and Edit feature also available
          <br />
          🤍 Available in both MERN and Node-Express only
          <br />
          🤍 Custom authentication and Validation
        </p>
      </div>
    ),
    stack: (
      <div>
        <p>
          <span className="text-success">⚜ MERN Version</span>
          <br />
          ⚙ Frontend <br />
          &emsp; • React.js - with Hooks
          <br />
          &emsp; • Html, Css, Javascript
          <br />
          &emsp; • Material UI
          <br />
          ⚙ Backend <br />
          &emsp; • Node.js with Express.js (RESTful API)
          <br />
          ⚙ Database
          <br />
          &emsp; • MongoDB with Mongoose
          <br />
          ⚙ Deployment
          <br />
          &emsp; • Frontend on Firebase and Backend on Heroku
        </p>
      </div>
    ),
  },
];

export default projects;
