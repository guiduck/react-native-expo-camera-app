import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import styles from '../src/styles';

export default function MailForm() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={values => {
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
            />
            <TextInput
              style={styles.input}
              placeholder='User email'
              onChangeText={formikProps.handleChange('email')}
              value={formikProps.values.email}
            />
            <TextInput
              style={styles.input}
              placeholder='User message'
              onChangeText={formikProps.handleChange('message')}
              value={formikProps.values.message}
            />
            <Button
              title='submit'
              color='maroon'
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
