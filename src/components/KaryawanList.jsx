/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useState} from 'react'
import {PencilLine,Trash} from "lucide-react";
// import {topProducts} from "@/constants";
import axios from 'axios';

function KaryawanList() {
    const [karyawanData, setKaryawanData] = useState([]);
    
      useEffect(() => {
        fetchKaryawanData();
      }, []);
    
      const fetchKaryawanData = async () => {
        try {
          const response = await axios.get("http://localhost:5000/users");
          console.log(response.data);
          setKaryawanData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        fetchKaryawanData();
      };
  return (
    <div className="card">
                   <div className="card-header">
                       <p className="card-title">Daftar Karyawan</p>
                   </div>
                   <div className="card-body p-0">
                       <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                           <table className="table">
                               <thead className="table-header">
                                   <tr className="table-row">
                                       <th className="table-head">No</th>
                                       <th className="table-head">Nip</th>
                                       <th className="table-head">Nama</th>
                                       <th className="table-head">Jabatan</th>
                                       <th className="table-head">Role</th>
                                       <th className="table-head">Actions</th>
                                   </tr>
                               </thead>
                               <tbody className="table-body">
                                   {karyawanData.map((karyawan,index) => (
                                       <tr
                                           key={karyawan.id}
                                           className="table-row"
                                       >
                                           <td className="table-cell">{index + 1}</td>
                                           <td className="table-cell">
                                               <div className="flex w-max gap-x-4">
                                                   
                                                   <div className="flex flex-col">
                                                       <p>{karyawan.nip}</p>
                                                   </div>
                                               </div>
                                           </td>
                                           <td className="table-cell">{karyawan.name}</td>
                                           <td className="table-cell">{karyawan.jabatan}</td>
                                           <td className="table-cell">
                                               <div className="flex items-center gap-x-2">
                                                   
                                                   {karyawan.role}
                                               </div>
                                           </td>
                                           <td className="table-cell">
                                               <div className="flex items-center gap-x-4">
                                                   <button className="text-blue-500 dark:text-blue-600">
                                                       <PencilLine size={20} />
                                                   </button>
                                                   <button className="text-red-500" onClick={() => deleteUser(karyawan.id)}>
                                                       <Trash size={20} />
                                                   </button>
                                               </div>
                                           </td>
                                       </tr>
                                   ))}
                               </tbody>
                           </table>
                       </div>
                   </div>
               </div>
  )
}

export default KaryawanList