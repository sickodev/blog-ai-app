"use client";

import { FormattedPost } from "@/app/types";
import { FormEvent, useState } from "react";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import SocialLinks from "@/app/(shared)/SocialLinks";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorMenuBar from "./EditorMenuBar";
import CategoryAndEdit from "./CategoryAndEdit";
import Article from "./Article";
type Props = {
    post: FormattedPost;
};

const Content = ({ post }: Props) => {
    const [isEditable, setIsEditable] = useState<boolean>(false);

    const [title, setTitle] = useState<string>(post.title);
    const [titleError, settitleError] = useState<string>("");
    const [tempTitle, setTempTitle] = useState<string>(title);

    const [content, setContent] = useState<string>(post.content);
    const [contentError, setContentError] = useState<string>("");
    const [tempContent, setTempContent] = useState<string>(content);

    const date = new Date(post?.createdAt);
    const options = { year: "numeric", month: "long", day: "numeric" } as any;
    const formattedDate = date.toLocaleDateString("en-US", options);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (title === "") settitleError("This field is required");
        if (editor?.isEmpty) setContentError("This field is required");
        if (title === "" || editor?.isEmpty) return;

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/post/${post.id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    content: content,
                }),
            }
        );

        const data = await response.json();

        handleIsEditable(false);
        setTempTitle("");
        setTempContent("");

        setTitle(data.title);
        setContent(data.content);
        editor?.commands.setContent(data.content);
    };

    const handleOnChangeContent = ({ editor }: any) => {
        if (!(editor as Editor).isEmpty) setContentError("");
        setContent((editor as Editor).getHTML());
    };

    const handleIsEditable = (bool: boolean) => {
        setIsEditable(bool);
        editor?.setEditable(bool);
    };

    const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (title) settitleError("");
        setTitle(e.target.value);
    };

    const editor = useEditor({
        extensions: [StarterKit],
        onUpdate: handleOnChangeContent,
        content: content,
        editable: isEditable,
        editorProps: {
            attributes: {
                class: "prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
            },
        },
    });

    return (
        <div className='prose w-full max-w-full mb-10'>
            {/* BREADCRUMBS */}
            <h5 className='text-wh-300'>{`Home > ${post.category} > ${post.title}`}</h5>
            {/* CATEGORY AND EDIT */}
            <CategoryAndEdit
                isEditable={isEditable}
                handleIsEditable={handleIsEditable}
                title={title}
                setTitle={setTitle}
                tempTitle={tempTitle}
                setTempTitle={setTempTitle}
                tempContent={tempContent}
                setTempContent={setTempContent}
                editor={editor}
                post={post}
            />
            <form action='' onSubmit={handleSubmit}>
                {/* Header */}
                <>
                    {isEditable ? (
                        <div>
                            <textarea
                                className='border-2 rounded-md bg-wh-50 p-3 w-full'
                                placeholder='Title'
                                onChange={handleOnChangeTitle}
                                value={title}
                            />
                            {titleError && (
                                <p className='mt-1 text-wh-500'>{titleError}</p>
                            )}
                        </div>
                    ) : (
                        <h3 className='font-bold text-3xl mt-3'>{title}</h3>
                    )}
                    <div className='flex gap-3'>
                        <h5 className='font-semibold text-xs'>
                            By {post.author}
                        </h5>
                        <h6 className='text-wh-300 text-xs'>{formattedDate}</h6>
                    </div>
                </>
                {/* Image */}
                <div className='relative w-auto mt-2 mb-16 h-96'>
                    <Image
                        fill
                        alt={post.title}
                        src={post.image}
                        sizes='(max-width: 480px) 100vw,
                    (max-width: 768px) 85vw,
                    (max-width: 1060px) 70vw,
                    60vw'
                        style={{ objectFit: "cover" }}
                    />
                </div>

                {/* ARTICLE */}
                <Article
                    contentError={contentError}
                    editor={editor}
                    isEditable={isEditable}
                    setContent={setContent}
                    title={title}
                />

                {/* SUBMIT BUTTON */}
                {isEditable && (
                    <div className='flex justify-end'>
                        <button className='bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5'>
                            SUBMIT
                        </button>
                    </div>
                )}
            </form>
            {/* Social Links */}
            <div className='hidden md:block mt-10 w-1/3'>
                <SocialLinks isDark />
            </div>
        </div>
    );
};

export default Content;
