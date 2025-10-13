import React from "react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Contacts", href: "#" },
    { label: "Apps", href: "#" },
    { label: "Turm", href: "#" },
];

// const contractInfo = [
//     {icon: Phone, text: '+82 5748 6640', color: "text-pink-500"},
//     {icon: Main, text: "oneweekonegame1@gmail.com", color: "text-yellow-500"},
//     {
//         icon: Mappin,
//         text: "123"
//     }
// ]

  return (
    // <footer className="relative overflow-hidden bg-gradient-to-br
    //  from-gray-900 to-gray-800 text-white py-12 px-4 sm:py-16
    //   md:py-20 md:px-12 lg:px-20">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
    //      gap-8 md:gap-12 mb-12">
    //         <div className="space-y-6">
    //             <div className="flex items-center text-2xl font-bold">
    //                 <div className="w-10 h-10 flex items-center text-2xl 
    //                 font-bold">
    //                     <div className="w-10 h-10 flex items-center justify-center
    //                      rounded-full border-4 border-pink-600 text-pink-600">
    //                     GW
    //                     </div>
    //                 <span>
    //                     <span className="text-yellow-500">Studio</span>
    //                 </span>
    //                 </div>
    //                 <p className="text-gray-300 leading-relaxed">
    //                     Hello WorldHello WorldHello WorldHello World
    //                 </p>
    //             </div>
    //         </div>
    //     </div>

    // </footer>


<footer className="bg-gray-800 text-gray-200 text-center py-4 mt-auto fixed bottom-0 left-0 right-0">
      <p className="text-sm">© 2025 My Website. All rights reserved.</p>
      <p className="text-sm">© 2025 My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
