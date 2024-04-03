import React from 'react';
import './App.scss';
import Card from './components/layout/Card';
import Accordion from './components/layout/Accordion';
import { TbCameraPlus } from "react-icons/tb";
import FormField from './components/layout/Form-field';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Option = {
  value: string;
  name: string;
}
type formField = {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'phone' | 'select' | 'textarea' | 'editor';
  options?: Option[];
  emailVerified?: boolean;

}
function App() {


  const formFields: formField[] = [
    { label: 'Ad', name: 'firstName' },
    { label: 'Soyad', name: 'lastName' },
    { label: 'E-Posta Adresi', type: 'email', name: 'email', emailVerified: true },
    { label: 'Firma Adı', name: 'companyName' },
    { label: 'Vergi Numarası', name: 'taxNumber' },
    { label: 'Vergi Dairesi', name: 'taxBranch' },
    { label: 'Cep Telefonu', type: 'phone', name: 'mobilePhoneNumber' },
    { label: 'Sabit Telefon', name: 'phoneNumber' },
    {
      label: 'Firmanın Sektörü', type: 'select', name: 'sector', options: [
        { value: '', name: 'Seçiniz' },
        { value: '1', name: 'Sektör 1' },
        { value: '2', name: 'Sektör 2' }
      ]
    },
    { label: 'Çalışan Sayısı', name: 'personalCount' },
    { label: 'Posta Kodu', name: 'postCode' },
    { label: 'Web Adresi', name: 'webSite' },
    { label: 'Ülke', name: 'country' },
    { label: 'İl', name: 'state' },
    { label: 'İlçe', name: 'city' },
    { label: 'Adres', type: 'textarea', name: 'address' },
    { label: 'Firma Tanımlama (En az 100 karakter olmalı)', type: 'editor', name: 'componyDescription' }
  ];
  const initialValues: { [key: string]: string } = {};

  formFields.forEach(field => {
    initialValues[field.name] = '';
  });
  const formik = useFormik({
    initialValues,
    // validationSchema: Yup.object({
    //   firstName: Yup.string().required(),
    //   lastName: Yup.string().required(),
    //   email: Yup.string().email().required(),
    // }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <div className="container m-auto py-10">
      <div className="flex flex-col gap-4">
        {/* Header Start */}
        <Card>
          <h1 className='text-[19px] font-semibold'>HESAP AYARLARI</h1>
        </Card>
        {/* Header End */}
        {/* Company Info Start */}
        <Accordion title='Firma Bilgileri' subtitle='Ad, soyad, e-posta ve telefon bilgilerini düzenleyebilirsin.'>
          <form onSubmit={formik.handleSubmit}>
            {/* Avatar (Profile photo) Start */}
            <div className="flex justify-center">
              <label className='relative cursor-pointer'>
                <img src="assets/images/company-logo.png" alt="company-logo" className="w-[100px] h-[100px] object-cover rounded-full" />
                <TbCameraPlus className='absolute bottom-0 right-0 bg-blue-700 p-1 rounded-full text-[30px] text-white border-2 border-white' />
                <input type="file" name="image" id="image" value={''} hidden />
              </label>
            </div>
            {/* Avatar (Profile photo) End */}
            {/* Form Inputs start */}
            <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
              {formFields.map((field, index) => {
                if (field.type === 'editor' || field.type === 'textarea') {
                  return null; // Explicitly return null for these cases
                }
                return (
                  <FormField
                    onChange={formik.handleChange}
                    key={index}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    emailVerified={field.emailVerified}
                    options={field.options}
                  />
                )
              })}
              <FormField className='md:col-span-3' label="Adres" name="address" type="textarea" onChange={(e) => {
                formik.setFieldValue('address', e.target.value);
              }} />
              <FormField className='md:col-span-3' label="Firma Tanımlama (En az 100 karakter olmalı)" name="companyDescription" type="editor" onChange={(e) => {
                formik.setFieldValue('companyDescription', e.target.value);
              }} />
            </div>
            {/* Form Inputs end */}
            <div className="col-span-3 flex justify-end">
              <button className='bg-blue-700 px-5 py-2 mt-4 text-xl text-white rounded-sm ' type='submit'>
                Güncelle
              </button>
            </div>
          </form>
        </Accordion>
        {/* Company Info End */}
      </div>
    </div>
  );
}

export default App;
