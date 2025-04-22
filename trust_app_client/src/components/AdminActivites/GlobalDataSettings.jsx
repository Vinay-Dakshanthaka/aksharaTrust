import { useEffect, useState } from "react";
import { uploadImageToCloud, fetchSettings, updateSetting } from "../services/settingsService";

export default function AdminSettings() {
    const [settings, setSettings] = useState({});
    const [logoPreview, setLogoPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchSettings().then(setSettings);
    }, []);

    const handleChange = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const handleSave = async (key) => {
        setLoading(true);
        await updateSetting(key, settings[key]);
        setLoading(false);
        alert("Saved!");
    };

    const handleLogoUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setLoading(true);
        const imageUrl = await uploadImageToCloud(file); // Upload to Cloudinary/Firebase etc.
        handleChange("logo_url", imageUrl);
        await updateSetting("logo_url", imageUrl);
        setLogoPreview(imageUrl);
        setLoading(false);
        alert("Logo updated!");
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6">Global Site Settings</h2>

            <div className="space-y-6">

                {/* App Name */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">App Name</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={settings.app_name || ""}
                        onChange={(e) => handleChange("app_name", e.target.value)}
                    />
                    <button
                        onClick={() => handleSave("app_name")}
                        className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                    >
                        Save
                    </button>
                </div>

                {/* Tagline */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Tagline</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={settings.tagline || ""}
                        onChange={(e) => handleChange("tagline", e.target.value)}
                    />
                    <button
                        onClick={() => handleSave("tagline")}
                        className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                    >
                        Save
                    </button>
                </div>

                {/* Logo Upload */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Logo</label>
                    <input type="file" accept="image/*" onChange={handleLogoUpload} />
                    {settings.logo_url && (
                        <img
                            src={logoPreview || settings.logo_url}
                            alt="Logo Preview"
                            className="mt-4 h-20"
                        />
                    )}
                </div>

                {/* Social Links */}
                {["facebook", "instagram", "youtube", "twitter", "linkedin"].map((key) => (
                    <div key={key}>
                        <label className="block text-gray-700 font-semibold capitalize mb-1">
                            {key} URL
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            value={settings[key] || ""}
                            onChange={(e) => handleChange(key, e.target.value)}
                        />
                        <button
                            onClick={() => handleSave(key)}
                            className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                ))}

                {loading && <p className="text-blue-600">Processing...</p>}
            </div>
        </div>
    );
}
