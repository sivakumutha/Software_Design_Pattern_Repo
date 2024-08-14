
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Edit, Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const UserPage = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    eventName: '',
    username: '',
    email: '',
    password: ''
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      eventName: "Event A",
      username: "johndoe",
      email: "john@example.com",
      password: "",
    },
    {
      id: 2,
      eventName: "Event B",
      username: "janesmith",
      email: "jane@example.com",
      password: "",
    },
  ]);
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === currentUserId ? { ...user, ...formData } : user
        )
      );
    } else {
      setUsers((prevUsers) => [
        ...prevUsers,
        { id: users.length + 1, ...formData },
      ]);
    }
    setOpen(false);
    setEditMode(false);
    setFormData({ eventName: '', username: '', email: '', password: '' });
  };

  const handleEdit = (user) => {
    setFormData({
      eventName: user.eventName,
      username: user.username,
      email: user.email,
      password: user.password,
    });
    setCurrentUserId(user.id);
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Event List</CardTitle>
          <Button onClick={() => { setOpen(true); setEditMode(false); }}>
            <Plus className='h-10 w-10 mr-2' /> Add
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Event Name</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.eventName}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                      <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md'
                        onClick={() => handleEdit(user)} />
                      <TrashIcon className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md'
                        onClick={() => handleDelete(user.id)} />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{editMode ? "Edit User" : "Add User"}</SheetTitle>
          </SheetHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="eventName" className="text-right">
                Event Name
              </Label>
              <Input id="eventName" value={formData.eventName} onChange={handleInputChange} className="col-span-3" required />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value={formData.username} onChange={handleInputChange} className="col-span-3" required />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" value={formData.email} onChange={handleInputChange} className="col-span-3" required />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input id="password" value={formData.password} onChange={handleInputChange} className="col-span-3" required />
            </div>
            <SheetFooter className='flex flex-col flex-1'>
              <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' type="button" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" className='w-1/2'>{editMode ? "Save changes" : "Add User"}</Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default UserPage;
