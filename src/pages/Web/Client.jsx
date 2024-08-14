



// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

// import './styles.css'; // Adjust the path according to your project structure


const Client = () => {
  const clientImage1 = 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=';
  const clientImage2 = 'https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg';

  return (
    <section id="review" className="py-16">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="text-[#e63946]">what</span> our clients say
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="bg-white p-6 m-4 shadow-lg rounded text-center flex flex-col items-center">
          <img src={clientImage1} alt="John Doe" className="w-24 h-24 rounded-full mb-4 object-cover" />
          <FontAwesomeIcon icon={faQuoteRight} className="text-[#e63946] text-4xl mb-4" />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="mb-4 text-gray-800">"The team’s attention to detail turned our vision into reality seamlessly."</p>
          <h4 className="font-semibold text-gray-900">John Doe</h4>
          <p className="text-gray-600">Client</p>
        </div>
        <div className="bg-white p-6 m-4 shadow-lg rounded text-center flex flex-col items-center">
          <img src={clientImage2} alt="Jane Smith" className="w-24 h-24 rounded-full mb-4 object-cover" />
          <FontAwesomeIcon icon={faQuoteRight} className="text-[#e63946] text-4xl mb-4" />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="mb-4 text-gray-800">"Everything was perfect; the event ran smoothly from start to finish."</p>
          <h4 className="font-semibold text-gray-900">Jane Smith</h4>
          <p className="text-gray-600">Client</p>
        </div>
      </div>
    </section>
  );
}

export default Client;
