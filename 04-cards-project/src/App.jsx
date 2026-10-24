import Card from "./components/Card";

const App = () => {
  const userProfiles = [
    {
      // id: 1,
      available: true,
      payPerHour: 55,
      profilePicture: "https://randomuser.me/api/portraits/women/44.jpg",
      userName: "Ava Mitchell",
      post: "Product Designer",
      company: "Google",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/960px-Google_%22G%22_logo.svg.png",
      tags: {
        primary: ["UI", "UX", "Figma"],
        extra: ["Design Systems", "Prototyping"],
      },
      description:
        "Ava is a product designer at Google who turns complex problems into simple, delightful interfaces used by millions.",
    },
    {
      // id: 2,
      available: false,
      payPerHour: 62,
      profilePicture: "https://randomuser.me/api/portraits/men/32.jpg",
      userName: "Marcus Chen",
      post: "Frontend Engineer",
      company: "Meta",
      companyLogo:
        "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      tags: {
        primary: ["React", "JavaScript", "CSS"],
        extra: ["Web Dev", "Performance"],
      },
      description:
        "Marcus builds fast, accessible web experiences at Meta with a deep focus on frontend performance.",
    },
    {
      // id: 3,
      available: true,
      payPerHour: 68,
      profilePicture: "https://randomuser.me/api/portraits/women/68.jpg",
      userName: "Priya Sharma",
      post: "Backend Engineer",
      company: "Amazon",
      companyLogo:
        "https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small/amazon-logo-amazon-icon-transparent-free-png.png",
      tags: {
        primary: ["Node.js", "Backend", "AWS"],
        extra: ["Databases"],
      },
      description:
        "Priya designs scalable backend systems at Amazon that power high-traffic e-commerce workflows.",
    },
    {
      // id: 4,
      available: true,
      payPerHour: 60,
      profilePicture: "https://randomuser.me/api/portraits/men/45.jpg",
      userName: "Daniel Osei",
      post: "iOS Engineer",
      company: "Apple",
      companyLogo:
        "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
      tags: {
        primary: ["iOS", "Swift", "SwiftUI"],
        extra: ["Mobile"],
      },
      description:
        "Daniel crafts polished iOS experiences at Apple with a strong eye for smooth, native interactions.",
    },
    {
      // id: 5,
      available: false,
      payPerHour: 72,
      profilePicture: "https://randomuser.me/api/portraits/women/21.jpg",
      userName: "Elena Petrova",
      post: "Data Scientist",
      company: "Netflix",
      companyLogo:
        "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
      tags: {
        primary: ["Python", "Machine Learning", "Data Analysis"],
        extra: ["SQL"],
      },
      description:
        "Elena uses data to shape recommendation systems at Netflix, blending statistics with real product impact.",
    },
    {
      // id: 6,
      available: true,
      payPerHour: 64,
      profilePicture: "https://randomuser.me/api/portraits/men/76.jpg",
      userName: "Ryan Bennett",
      post: "DevOps Engineer",
      company: "Microsoft",
      companyLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPn126Jyj2b7jmuuI5clabSlBmeyjdN81oW9hT6yIqFuVGLigFr2odYQ&s=10",
      tags: {
        primary: ["Azure", "CI/CD", "Docker"],
        extra: ["Kubernetes"],
      },
      description:
        "Ryan keeps large-scale cloud infrastructure at Microsoft reliable, secure, and easy to deploy.",
    },
    {
      // id: 7,
      available: true,
      payPerHour: 58,
      profilePicture: "https://randomuser.me/api/portraits/women/12.jpg",
      userName: "Sofia Rossi",
      post: "Full-Stack Engineer",
      company: "Google",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/960px-Google_%22G%22_logo.svg.png",
      tags: {
        primary: ["React", "Node.js", "MongoDB"],
        extra: ["Full Stack"],
      },
      description:
        "Sofia moves comfortably between frontend and backend, shipping full-stack features at Google.",
    },
    {
      // id: 8,
      available: false,
      payPerHour: 54,
      profilePicture: "https://randomuser.me/api/portraits/men/54.jpg",
      userName: "Tariq Ahmed",
      post: "Android Engineer",
      company: "Freelancer",
      companyLogo: null,
      tags: {
        primary: ["Android", "Kotlin", "Java"],
        extra: ["Mobile"],
      },
      description:
        "Tariq builds and maintains Android experiences at Meta used by billions of people worldwide.",
    },
    {
      // id: 9,
      available: true,
      payPerHour: 50,
      profilePicture: "https://randomuser.me/api/portraits/women/33.jpg",
      userName: "Grace Lin",
      post: "UX Researcher",
      company: "Freelancer",
      companyLogo: null,
      tags: {
        primary: ["UX", "User Research", "Wireframing"],
        extra: ["Usability Testing"],
      },
      description:
        "Grace runs user research at Amazon to make sure every design decision is backed by real customer insight.",
    },
    {
      // id: 10,
      available: true,
      payPerHour: 46,
      profilePicture: "https://randomuser.me/api/portraits/men/23.jpg",
      userName: "Noah Williams",
      post: "Graphic Designer",
      company: "Freelancer",
      companyLogo: null,
      tags: {
        primary: ["Illustrator", "Photoshop", "Branding"],
        extra: ["Visual Design"],
      },
      description:
        "Noah is a graphic designer at Apple with a sharp eye for clean, minimal visual storytelling.",
    },
    {
      // id: 11,
      available: false,
      payPerHour: 75,
      profilePicture: "https://randomuser.me/api/portraits/women/56.jpg",
      userName: "Isabella Novak",
      post: "Machine Learning Engineer",
      company: "Netflix",
      companyLogo:
        "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
      tags: {
        primary: ["Python", "TensorFlow", "Machine Learning"],
        extra: ["Data Engineering"],
      },
      description:
        "Isabella builds and trains ML models at Netflix that power personalization at scale.",
    },
    {
      // id: 12,
      available: true,
      payPerHour: 48,
      profilePicture: "https://randomuser.me/api/portraits/men/8.jpg",
      userName: "Ethan Park",
      post: "QA Engineer",
      company: "Freelancer",
      companyLogo: null,
      tags: {
        primary: ["Testing", "Automation", "Selenium"],
        extra: ["QA"],
      },
      description:
        "Ethan ensures product quality at Microsoft through rigorous manual and automated testing.",
    },
  ];

  // const jobOpenings = [
  //   {
  //     brandLogo:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/960px-Google_%22G%22_logo.svg.png",
  //     name: "Google",
  //     datePosted: "5 days ago",
  //     post: "Frontend Developer",
  //     tag1: "Full Time",
  //     tag2: "Junior Level",
  //     pay: "$45/hr",
  //     location: "Mumbai, India",
  //   },
  //   {
  //     brandLogo:
  //       "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
  //     name: "Meta",
  //     datePosted: "2 weeks ago",
  //     post: "React Engineer",
  //     tag1: "Full Time",
  //     tag2: "Mid Level",
  //     pay: "$55/hr",
  //     location: "Bengaluru, India",
  //   },
  //   {
  //     brandLogo:
  //       "https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small/amazon-logo-amazon-icon-transparent-free-png.png",
  //     name: "Amazon",
  //     datePosted: "10 days ago",
  //     post: "Software Development Engineer",
  //     tag1: "Full Time",
  //     tag2: "Junior Level",
  //     pay: "$50/hr",
  //     location: "Hyderabad, India",
  //   },
  //   {
  //     brandLogo:
  //       "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
  //     name: "Apple",
  //     datePosted: "3 weeks ago",
  //     post: "iOS Developer",
  //     tag1: "Full Time",
  //     tag2: "Senior Level",
  //     pay: "$80/hr",
  //     location: "Pune, India",
  //   },
  //   {
  //     brandLogo:
  //       "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
  //     name: "Netflix",
  //     datePosted: "1 week ago",
  //     post: "Backend Engineer",
  //     tag1: "Full Time",
  //     tag2: "Senior Level",
  //     pay: "$95/hr",
  //     location: "Remote",
  //   },
  //   {
  //     brandLogo:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPn126Jyj2b7jmuuI5clabSlBmeyjdN81oW9hT6yIqFuVGLigFr2odYQ&s=10",
  //     name: "Microsoft",
  //     datePosted: "4 days ago",
  //     post: "Cloud Engineer",
  //     tag1: "Full Time",
  //     tag2: "Mid Level",
  //     pay: "$60/hr",
  //     location: "Noida, India",
  //   },
  //   {
  //     brandLogo:
  //       "https://static.vecteezy.com/system/resources/previews/020/336/186/non_2x/nvidia-logo-nvidia-icon-free-free-vector.jpg",
  //     name: "NVIDIA",
  //     datePosted: "6 weeks ago",
  //     post: "AI/ML Engineer",
  //     tag1: "Full Time",
  //     tag2: "Senior Level",
  //     pay: "$100/hr",
  //     location: "Bengaluru, India",
  //   },
  //   {
  //     brandLogo:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uY4d5TNjC1yRM2j7ceVjX12P1GR7UpNHNSvuQp_xPQ&s=10",
  //     name: "Adobe",
  //     datePosted: "8 days ago",
  //     post: "UI Engineer",
  //     tag1: "Part Time",
  //     tag2: "Junior Level",
  //     pay: "$40/hr",
  //     location: "Gurugram, India",
  //   },
  //   {
  //     brandLogo:
  //       "https://static.vecteezy.com/system/resources/previews/027/127/501/non_2x/uber-logo-uber-icon-transparent-free-png.png",
  //     name: "Uber",
  //     datePosted: "3 days ago",
  //     post: "Mobile App Developer",
  //     tag1: "Full Time",
  //     tag2: "Mid Level",
  //     pay: "$65/hr",
  //     location: "Bengaluru, India",
  //   },
  //   {
  //     brandLogo:
  //       "https://logosandtypes.com/wp-content/uploads/2022/07/OpenAI.png",
  //     name: "OpenAI",
  //     datePosted: "12 days ago",
  //     post: "AI Product Engineer",
  //     tag1: "Full Time",
  //     tag2: "Senior Level",
  //     pay: "$120/hr",
  //     location: "Remote",
  //   },
  // ];
  return (
    <>
      <div className="bg-gray-900 h-screen text-gray-50 text-xl gap-4 p-4 overflow-x-hidden overflow-y-auto flex flex-wrap items-center justify-center">
        {userProfiles.map((e, idx) => {
          return (
            <div key={idx}>
              <Card
                available={e.available}
                payPerHour={e.payPerHour}
                profilePicture={e.profilePicture}
                userName={e.userName}
                post={e.post}
                company={e.company}
                companyLogo={e.companyLogo}
                tags={e.tags}
                description={e.description}
              />
            </div>
          );
        })}
      </div>
      {/* <div className="parent">
        {jobOpenings.map((elem, idx) => {
          return (
            <div key={idx}>
              <Card
                logo={elem.brandLogo}
                company={elem.name}
                datePosted={elem.datePosted}
                post={elem.post}
                tag1={elem.tag1}
                tag2={elem.tag2}
                pay={elem.pay}
                location={elem.location}
              />
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default App;
