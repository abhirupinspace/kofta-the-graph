
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

interface UserProfile {
    name: string;
    email: string;
    bio: string;
    profilePicture: string;
    twitter: string;
    linkedin: string;
    github: string;
    
}

const Profile: React.FC = () => {
    const [user, setUser] = useState<UserProfile>({
        name: "Abhirup Banerjee",
        email: "abkenway2003@example.com",
        bio: "Full stack developer and blockchain enthusiast.",
        profilePicture: "https://via.placeholder.com/150",
        twitter: "https://twitter.com/AbhirupTweetOn",
        linkedin: "https://linkedin.com/in/abhirup",
        github: "https://github.com/abhirupinspace",
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setUser(prevUser => ({ ...prevUser, profilePicture: URL.createObjectURL(e.target.files[0]) }));
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        
        setIsEditing(false);
    };

    
    return (
        <div>
            <Navbar />
            <div className='bg-cover h-screen bg-fixed bg-[url("./assets/bg7.png")]'>

                <div className="container mx-auto p-4">
                    <div className="p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <img
                            className="w-32 h-32 rounded-full mb-4"
                            src={user.profilePicture}
                            alt={`${user.name}'s profile`}
                        />
                        {isEditing ? (
                            <div className="flex flex-col items-center">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarChange}
                                    className="mb-4"
                                />
                                <p>Edit Username</p>
                                <input
                                    type="text"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    className="mb-2 p-2 border border-black rounded text-black"
                                    placeholder="Name"
                                />
                                <p>Edit Bio</p>
                                <textarea
                                    name="bio"
                                    value={user.bio}
                                    onChange={handleChange}
                                    className="mb-2 p-2 border border-gray-300 rounded text-black"
                                    placeholder="Bio"
                                />
                                <p>Edit Email</p>
                                <input
                                    type="text"
                                    name="name"
                                    value={user.email}
                                    onChange={handleChange}
                                    className="mb-2 p-2 border border-black rounded text-black"
                                    placeholder="Email"
                                />
                                <p>Twitter:</p>
                                <input
                                    type="text"
                                    name="twitter"
                                    value={user.twitter}
                                    onChange={handleChange}
                                    className="mb-2 p-2 border border-gray-300 rounded text-black"
                                    placeholder="Twitter URL"
                                />
                                <p>LinkedIn</p>
                                <input
                                    type="text"
                                    name="linkedin"
                                    value={user.linkedin}
                                    onChange={handleChange}
                                    className="mb-2 p-2 border border-gray-300 rounded text-black"
                                    placeholder="LinkedIn URL"
                                />
                                <p>Github</p>
                                <input
                                    type="text"
                                    name="github"
                                    value={user.github}
                                    onChange={handleChange}
                                    className="mb-4 p-2 border border-gray-300 rounded text-black"
                                    placeholder="GitHub URL"
                                />
                                <button
                                    onClick={handleSave}
                                    className="bg-pink-200 hover:bg-pink-300 text-black font-bold py-2 px-4 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <>
                                <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
                                <p className="text-white mb-4">{user.email}</p>
                                <p className="text-white text-center mb-4">{user.bio}</p>
                                <div className="text-lg font-semibold mb-4">
                                    <span>XP: </span>
                                    <span>{user.xp}</span>
                                </div>
                                <div className="flex space-x-4 mb-4">
                                    <a href={user.twitter} target="_blank" rel="noopener noreferrer">
                                        <img src="./assets/twitter.png" alt="LinkedIn" className="w-6 h-6" />
                                    </a>
                                    <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                                        <img src="../assets/twitter.png" alt="LinkedIn" className="w-6 h-6" />
                                    </a>
                                    <a href={user.github} target="_blank" rel="noopener noreferrer">
                                        <img src="/assets/github.png" alt="GitHub" className="w-6 h-6" />
                                    </a>
                                </div>
                                <button
                                    onClick={handleEditToggle}
                                    className="bg-pink-200 hover:bg-pink-300 text-black font-bold py-2 px-4 rounded"
                                >
                                    Edit Profile
                                </button>
                            </>
                        )}
                    </div>
                </div>
                </div>
            </div>
    );
};

export default Profile;
