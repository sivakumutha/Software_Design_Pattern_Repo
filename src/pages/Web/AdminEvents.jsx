// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import axios from 'axios';
// import { Book, Edit, Plus, TrashIcon } from "lucide-react";
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const baseURL = 'http://localhost:8080/courses';

// const AdminEvents = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     difficultyLevel: '',
//     schedule: '',
//     syllabus: '',
//     prerequisites: '',
//   });
//   const [courses, setCourses] = useState([]);
//   const [currentCourseId, setCurrentCourseId] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(baseURL);
//         setCourses(response.data);
//       } catch (err) {
//         console.error('Error fetching courses:', err);
//         setError("There was a problem fetching courses. Please try again.");
//       }
//     };
//     fetchCourses();
//   }, []);

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [id]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.title || !formData.category || !formData.difficultyLevel || !formData.schedule || !formData.syllabus || !formData.prerequisites) {
//       setError("Please fill in all the details");
//     } else {
//       try {
//         if (editMode) {
//           await axios.put(http://localhost:8080/course/update/${currentCourseId}, formData);
//           setCourses((prevCourses) =>
//             prevCourses.map((course) =>
//               course.id === currentCourseId ? { ...course, ...formData } : course
//             )
//           );
//         } else {
//           const response = await axios.post('http://localhost:8080/courses/add', formData);
//           const newCourse = { id: response.data.id, ...formData };
//           setCourses((prevCourses) => [...prevCourses, newCourse]);
//         }

//         setOpen(false);
//         setEditMode(false);
//         setFormData({ title: '', category: '', difficultyLevel: '', schedule: '', syllabus: '', prerequisites: '' });
//         setError(null);
//       } catch (err) {
//         console.error('Error saving course:', err);
//         setError("There was a problem saving the course. Please try again.");
//       }
//     }
//   };

//   const handleEdit = (course) => {
//     setFormData({
//       title: course.title,
//       category: course.category,
//       difficultyLevel: course.difficultyLevel,
//       schedule: course.schedule,
//       syllabus: course.syllabus,
//       prerequisites: course.prerequisites,
//     });
//     setCurrentCourseId(course.id);
//     setEditMode(true);
//     setOpen(true);
//   };

//   const handleDelete = async (courseId) => {
//     try {
//       await axios.delete(http://localhost:8080/course/delete/${courseId});
//       setCourses((prevCourses) => prevCourses.filter((course) => course.id !== courseId));
//     } catch (err) {
//       console.error('Error deleting course:', err);
//       setError("There was a problem deleting the course. Please try again.");
//     }
//   };

//   const handleViewReport = () => {
//     navigate('/viewreport');
//   };

//   return (
//     <div className='m-1 p-4'>
//       <div className='mb-4'>
//         <Card className='w-1/4 border border-primary'>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Total Courses
//             </CardTitle>
//             <Book className="h-6 w-6 text-primary" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{courses.length}</div>
//           </CardContent>
//         </Card>
//       </div>
//       <Card className='shadow-sm shadow-primary'>
//         <CardHeader className='w-full flex flex-row justify-between items-center'>
//           <Button onClick={handleViewReport}>
//             View Report
//           </Button>
//           <Button onClick={() => { setOpen(true); setEditMode(false); }}>
//             <Plus className='h-10 w-10 mr-2' /> Add Course
//           </Button>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="w-[150px]">Title</TableHead>
//                 <TableHead>Category</TableHead>
//                 <TableHead>Difficulty Level</TableHead>
//                 <TableHead>Schedule</TableHead>
//                 <TableHead>Syllabus</TableHead>
//                 <TableHead>Prerequisites</TableHead>
//                 <TableHead className="flex justify-center">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {courses.map((course) => (
//                 <TableRow key={course.id}>
//                   <TableCell className="font-medium">{course.title}</TableCell>
//                   <TableCell>{course.category}</TableCell>
//                   <TableCell>{course.difficultyLevel}</TableCell>
//                   <TableCell>{course.schedule}</TableCell>
//                   <TableCell>{course.syllabus}</TableCell>
//                   <TableCell>{course.prerequisites}</TableCell>
//                   <TableCell>
//                     <span className='w-full h-full flex justify-center items-center gap-3'>
//                       <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md'
//                         onClick={() => handleEdit(course)} />
//                       <TrashIcon className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md'
//                         onClick={() => handleDelete(course.id)} />
//                     </span>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//       <Sheet open={open} onClose={() => setOpen(false)}>
//         <SheetHeader>
//           <SheetTitle>{editMode ? 'Edit Course' : 'Add Course'}</SheetTitle>
//         </SheetHeader>
//         <SheetContent>
//           <form onSubmit={handleSubmit}>
//             <div className="flex flex-col gap-4">
//               <div>
//                 <Label htmlFor="title">Title</Label>
//                 <Input id="title" value={formData.title} onChange={handleInputChange} />
//               </div>
//               <div>
//                 <Label htmlFor="category">Category</Label>
//                 <Input id="category" value={formData.category} onChange={handleInputChange} />
//               </div>
//               <div>
//                 <Label htmlFor="difficultyLevel">Difficulty Level</Label>
//                 <Input id="difficultyLevel" value={formData.difficultyLevel} onChange={handleInputChange} />
//               </div>
//               <div>
//                 <Label htmlFor="schedule">Schedule</Label>
//                 <Input id="schedule" value={formData.schedule} onChange={handleInputChange} />
//               </div>
//               <div>
//                 <Label htmlFor="syllabus">Syllabus</Label>
//                 <Input id="syllabus" value={formData.syllabus} onChange={handleInputChange} />
//               </div>
//               <div>
//                 <Label htmlFor="prerequisites">Prerequisites</Label>
//                 <Input id="prerequisites" value={formData.prerequisites} onChange={handleInputChange} />
//               </div>
//             </div>
//             {error && (
//               <div className="text-red-500">{error}</div>
//             )}
//             <div className="flex justify-end gap-4 mt-4">
//               <Button type="button" onClick={() => setOpen(false)}>Cancel</Button>
//               <Button type="submit">{editMode ? 'Update' : 'Add'}</Button>
//             </div>
//           </form>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// };

// export default AdminEvents;