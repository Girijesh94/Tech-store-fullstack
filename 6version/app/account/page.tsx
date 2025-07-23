"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const { user, isAuthenticated, logout, updateProfile, updatePreferences } = useAuth();
  const { getCartCount, getCartTotal } = useCart();
  const { getWishlistCount } = useWishlist();
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", email: "" });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (user) {
      setEditForm({
        name: user.name || "",
        email: user.email
      });
    }
  }, [user]);

  const handleSaveProfile = () => {
    updateProfile(editForm);
    setIsEditing(false);
  };

  const handlePreferenceChange = (key: keyof typeof user.preferences, value: boolean) => {
    updatePreferences({ [key]: value });
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>

      {isEditing ? (
        <>
          <input
            type="text"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="email"
            value={editForm.email}
            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
            className="mb-2 p-2 border rounded w-full"
          />
          <button onClick={handleSaveProfile} className="bg-green-500 text-white px-4 py-2 rounded mr-2">Save</button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {user?.name || "N/A"}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Edit Profile</button>
        </>
      )}

      <hr className="my-6" />

      <h2 className="text-xl font-semibold mb-2">Preferences</h2>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={user?.preferences?.newsletter || false}
          onChange={(e) => handlePreferenceChange("newsletter", e.target.checked)}
        />
        <span>Subscribe to newsletter</span>
      </label>

      <hr className="my-6" />

      <h2 className="text-xl font-semibold mb-2">My Stats</h2>
      <p>Cart Items: {getCartCount()}</p>
      <p>Cart Total: ₹{getCartTotal()}</p>
      <p>Wishlist Items: {getWishlistCount()}</p>

      <button
        onClick={logout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
