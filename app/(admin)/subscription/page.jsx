"use client";

import SubscriptionItems from "@/app/Components/SubscriptionItems";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [emails, setEmails] = useState([]);
  const fetchEmails = async () => {
    try {
      const response = await axios.get("/api/email");
      console.log(response.data); // Log to check the structure
      const data = response.data.emails; // Now safely access emails
      setEmails(data);
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };
  const deleteEmail = async (mongoId) => {
    const response = await axios.delete("/api/email", {
      params: {
        id: mongoId,
      },
    });
    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmails();
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchEmails();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All subscription</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => {
              return (
                <SubscriptionItems
                  key={index}
                  mongoId={item._id}
                  deleteEmail={deleteEmail}
                  email={item.email}
                  date={item.date}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
