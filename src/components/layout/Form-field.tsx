import React, { TextareaHTMLAttributes } from 'react'
import { TbCheck } from 'react-icons/tb';

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

type Props = {
    label: string;
    type?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    required?: boolean;
    phoneVerified?: boolean;
    emailVerified?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    options?: Option[];
}

type Option = {
    value: string;
    name: string;
}
const FormField = (props: Props) => {
    return (
        <label className={`flex flex-col gap-1 ${props.className}`}>
            <div className='text-gray-500 text-xl font-semibold'>
                {props.label}
                <span className='text-red-500'>*</span>
            </div>
            {props.type === 'textarea' ?
                <textarea
                    className='!outline-none border-2 border-blue-700 rounded-md p-2 placeholder:text-blue-700 text-blue-700 min-h-32'
                    placeholder={props.placeholder ? props.placeholder : ''}
                    name={props.name ? props.name : ''}
                    value={props.value}
                    onChange={props.onChange}
                />
                : props.type === 'editor' ?
                    <div className="col-span-3">
                        <CKEditor editor={ClassicEditor} data="<p>Hello from CKEditor 5!</p>"
                            onChange={(event) => {
                                console.log(event);
                            }}
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
                            }}
                        />
                    </div>
                    : props.type === 'select' ?
                        <select
                            className='!outline-none !appearance-none border-2 border-blue-700 rounded-md p-2 placeholder:text-blue-700 text-blue-700 min-h-10'
                            name={props.name ? props.name : ''}
                            value={props.value}
                            onChange={(e) => props.onChange}
                        >
                            {props.options?.map((option, index) => (
                                <option key={index} value={option.value}>{option.name}</option>
                            ))}
                        </select>
                        :
                        <div className='relative'>
                            <input
                                className='!outline-none w-full border-2 border-blue-700 rounded-md p-2 placeholder:text-blue-700 text-blue-700 min-h-10'
                                placeholder={props.placeholder ? props.placeholder : ''}
                                type={props.type ? props.type : 'text'}
                                name={props.name ? props.name : ''}
                                value={props.value}
                                onChange={props.onChange}
                            />
                            {props.type === "email" && props.emailVerified &&
                                <div className='absolute top-[50%] -translate-y-1/2 end-0 bg-green-500 text-white h-full w-14 text-sm flex justify-center items-center rounded-e-md border-2 border-s-0 border-blue-700'>
                                    <TbCheck />
                                </div>
                            }
                            {props.type === "phone" && !props.phoneVerified &&
                                <button type='button' className='absolute px-3 text-xl top-[50%] -translate-y-1/2 end-0 bg-gray-500 text-white h-full flex justify-center items-center rounded-e-md border-2 border-s-0 border-blue-700'>
                                    Onayla
                                </button>
                            }
                        </div>
            }
        </label>
    )
}

export default FormField