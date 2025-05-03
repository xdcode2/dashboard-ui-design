// /* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// const defaultForm = {
//   nip: "",
//   nama: "",
//   jabatan: "",
//   role: "",
// };

// export default function AddKaryawan({ initialData, onSubmit }) {
//   const [form, setForm] = useState(defaultForm);

//   useEffect(() => {
//     if (initialData) setForm(initialData);
//   }, [initialData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(form);
//   };

//   return (
//     <Card className="max-w-xl mx-auto shadow-md rounded-2xl p-6">
//       <CardContent>
//         <h2 className="text-2xl font-semibold mb-4">
//           {initialData ? "Edit Karyawan" : "Tambah Karyawan"}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Label htmlFor="nip">NIP</Label>
//             <Input
//               id="nip"
//               name="nip"
//               type="text"
//               value={form.nip}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="nama">Nama</Label>
//             <Input
//               id="nama"
//               name="nama"
//               type="text"
//               value={form.nama}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="jabatan">Jabatan</Label>
//             <Input
//               id="jabatan"
//               name="jabatan"
//               type="text"
//               value={form.jabatan}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="role">Role</Label>
//             <Input
//               id="role"
//               name="role"
//               type="text"
//               value={form.role}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex justify-end pt-4">
//             <Button type="submit" className="w-full md:w-auto">
//               {initialData ? "Update" : "Simpan"}
//             </Button>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }


function AddKaryawan() {
  return (
    <div>AddKaryawan</div>
  )
}

export default AddKaryawan