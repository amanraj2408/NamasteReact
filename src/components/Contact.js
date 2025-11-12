import React from 'react'

function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name:</label>
          <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" type="text" id="name" name="name" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email:</label>
          <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" type="email" id="email" name="email" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message:</label>
          <textarea className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" id="message" name="message" required></textarea>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
