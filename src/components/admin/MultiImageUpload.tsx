"use client";

import { useState, useRef } from "react";
import { Upload, Loader2, X } from "lucide-react";

export function MultiImageUpload({
  values,
  onChange,
  label,
}: {
  values: string[];
  onChange: (urls: string[]) => void;
  label: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFiles(files: FileList) {
    setUploading(true);
    setError(null);
    const newUrls: string[] = [];
    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data?.error || "Upload failed");
        newUrls.push(data.url);
      }
      onChange([...values, ...newUrls]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed — try again, or paste a URL below.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function removeAt(i: number) {
    onChange(values.filter((_, idx) => idx !== i));
  }

  function addUrl() {
    if (urlInput.trim()) {
      onChange([...values, urlInput.trim()]);
      setUrlInput("");
    }
  }

  return (
    <div>
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>

      {values.length > 0 && (
        <div className="mb-3 grid grid-cols-4 gap-2">
          {values.map((url, i) => (
            <div key={`${url}-${i}`} className="group relative aspect-square overflow-hidden rounded-md border border-themed">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt="" className="h-full w-full object-cover" />
              <button
                type="button"
                onClick={() => removeAt(i)}
                className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-themed p-4 text-sm text-ink-soft transition-colors hover:border-brand hover:text-brand">
        {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
        {uploading ? "Uploading…" : "Click to upload images (you can select several)"}
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml"
          className="hidden"
          onChange={(e) => e.target.files && e.target.files.length > 0 && handleFiles(e.target.files)}
        />
      </label>

      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}

      <div className="mt-2 flex gap-2">
        <input
          type="text"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          placeholder="Or paste an image URL directly"
          className="input"
        />
        <button
          type="button"
          onClick={addUrl}
          className="flex-none rounded-md border border-themed px-3 text-sm font-medium text-ink hover:border-brand hover:text-brand"
        >
          Add
        </button>
      </div>
    </div>
  );
}
