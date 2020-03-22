import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import styles from '../src/styles';
import * as yup from 'yup';
import FlatButton from '../src/Button';

const mailSchema = yup.object({
  name: yup
    .string()
    .required()
    .min(4),
  email: yup
    .string()
    .required()
    .min(4),
  message: yup
    .string()
    .required()
    .min(4)
});

export default function MailForm({ addMail }) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={mailSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addMail(values);
          console.log(values);
        }}
      >
        {formikProps => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='User name'
              onChangeText={formikProps.handleChange('name')}
              value={formikProps.values.name}
              onBlur={formikProps.handleBlur('name')}
            />
            <Text style={styles.errorText}>
              {' '}
              {formikProps.touched.name && formikProps.errors.name}{' '}
            </Text>
            <TextInput
              style={styles.input}
              placeholder='User email'
              onChangeText={formikProps.handleChange('email')}
              value={formikProps.values.email}
              onBlur={formikProps.handleBlur('email')}
            />
            <Text style={styles.errorText}>
              {' '}
              {formikProps.touched.email && formikProps.errors.email}{' '}
            </Text>
            <TextInput
              style={styles.input}
              placeholder='Message'
              onChangeText={formikProps.handleChange('message')}
              value={formikProps.values.message}
              onBlur={formikProps.handleBlur('message')}
            />
            <Text style={styles.errorText}>
              {' '}
              {formikProps.touched.message && formikProps.errors.message}{' '}
            </Text>
            <FlatButton text='submit' onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
