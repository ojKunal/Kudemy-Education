import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

// Courses
const OurCourses = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=1425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Complete 2023 PHP Full Stack Web Developer Bootcamp",
    instructor: "Arunoda Susiripala",
    price: 1500,
    duration: "3 Weeks",
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "How the Internet Works & the Web Development Process",
    instructor: "Siddharth Kshetrapal",
    price: 1200,
    duration: "4 Weeks",
    quantity: 1,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Web Development Masterclass - Online Certification Course",
    instructor: "Tanay Pratap",
    price: 1300,
    duration: "3 Weeks",
    quantity: 1,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Practical Web Development: 22 Courses in 1",
    instructor: "Hemanth HM",
    price: 1200,
    duration: "4 Weeks",
    quantity: 1,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    title: "The Complete Web Developer Course 3.0",
    instructor: "Shivam Verma",
    price: 1500,
    duration: "3 Weeks",
    quantity: 1,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Internet and Web Development Fundamentals",
    instructor: "Ankur Kumar",
    price: 1200,
    duration: "4 Weeks",
    quantity: 1,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "How the Internet Works & the Web Development Process",
    instructor: "Siddharth Shankar Singh",
    price: 1300,
    duration: "3 Weeks",
    quantity: 1,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D",
    title: "The Complete 2023 PHP Full Stack Web Developer Bootcamp",
    instructor: "Rachit Gulati",
    price: 1200,
    duration: "4 Weeks",
    quantity: 1,
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Pre-Programming: Everything you need to know before you code",
    instructor: "Aakash Goel",
    price: 1500,
    duration: "3 Weeks",
    quantity: 1,
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Complete 2020 Fullstack Web Developer Course",
    instructor: "Harsh Vardhan Singh",
    price: 1200,
    duration: "4 Weeks",
    quantity: 1,
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "CSS, Bootstrap ,JavaScript, Web Development Course",
    instructor: "Shubham Saurav",
    price: 1300,
    duration: "3 Weeks",
    quantity: 1,
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Advanced Web Developer Bootcamp",
    instructor: "Swastik Agrawal",
    price: 1200,
    duration: "4 Weeks",
    quantity: 1,
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ultimate Web Designer & Web Developer Course",
    instructor: "Rahul Arora",
    price: 1500,
    duration: "3 Weeks",
    quantity: 1,
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1589395937658-0557e7d89fad?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Full Stack Web Development Bootcamp (Frontend & Backend)",
    instructor: "Divyanshu Maithani",
    price: 1200,
    duration: "4 Weeks",
    quantity: 1,
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1589395937658-0557e7d89fad?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "100 Days Of Code - 2024 Web Development Bootcamp",
    instructor: "Akshay Saini",
    price: 1300,
    duration: "3 Weeks",
    quantity: 1,
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1589395937658-0557e7d89fad?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Linode: Build and Deploy Responsive Websites on the Cloud",
    instructor: "Vijay Thapa",
    price: 1200,
    duration: "4 Weeks",
    quantity: 1,
  },
];

const Courses = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="mt-10">
        {/* Heading  */}
        <div className="">
          <h1 className=" text-center mb-5 text-2xl font-semibold text-blue-800">
            OUR COURSES
          </h1>
        </div>

        {/* main  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              {OurCourses.map((item, index) => {
                const { image, title, price, instructor, duration } = item;
                return (
                  <div key={index} className="p-4 w-full md:w-1/4">
                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer flex flex-col">
                      <img
                        className="lg:h-[15rem] h-86 w-full"
                        src={image}
                        alt="blog"
                      />
                      <div className="p-6 flex-grow">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                          {title}
                        </h1>
                        <h2 className="tracking-widest text-xs title-font font-bold text-gray-700 mb-2">
                          {instructor}
                        </h2>
                        <div className="lg:flex justify-between">
                          <h1 className="title-font text-lg font-medium text-gray-900">
                            ₹{price}
                          </h1>
                          <h1 className="title-font text-lg font-medium text-gray-900">
                            {duration}
                          </h1>
                        </div>
                      </div>
                      <div className="px-4 pb-4">
                        <button
                          className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[6px] rounded-lg font-bold"
                          onClick={() => navigate("/courseDetails")}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Courses;
