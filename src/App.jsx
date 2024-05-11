import React from 'react';
import Cards from './Components/Cards';
const App = () => {
  const data = [
    {
      title: "FREE",
      price: "$0/month",
      user: "Single User",
      storage: "50GB Storage",
      publicprojects: "Unlimited Public Project",
      community: "Community Access",
      privateprojects: "Unlimited Private Project",
      phone: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      status: "Monthly Status report",
      Isprivateprojects:false,
      Isphone:false,
      Issubdomain:false,
      Isstatus:false
    },
    {
      title: "PLUS",
      price: "$9/month",
      user: "5 User",
      storage: "50GB Storage",
      publicprojects: "Unlimited Public Project",
      community: "Community Access",
      privateprojects: "Unlimited Private Project",
      phone: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      status: "Monthly Status report",
      Isprivateprojects:true,
      Isphone:true,
      Issubdomain:true,
      Isstatus:false
    },
    {
      title: "PRO",
      price: "$49/month",
      user: "Unlimited User",
      storage: "50GB Storage",
      publicprojects: "Unlimited Public Project",
      community: "Community Access",
      privateprojects: "Unlimited Private Project",
      phone: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      status: "Monthly Status report",
      Isprivateprojects:true,
      Isphone:true,
      Issubdomain:true,
      Isstatus:true
    },
  ];

  return (
    <>
    <Cards data={data} />
    </>
  );
};

export default App;