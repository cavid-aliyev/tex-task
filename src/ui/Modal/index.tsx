import React, {useState} from 'react';
import {View, Modal, TextInput, Button, StyleSheet} from 'react-native';
import {IPost} from '../../pages/types/post';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSave: (title: string, body: string) => void;
  editableObj?: IPost;
}

const CustomModal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  onSave,
  editableObj,
}) => {
  const [title, setTitle] = useState((prev: any) => {
    return editableObj ? editableObj.title : prev;
  });
  const [body, setBody] = useState((prev: any) => {
    return editableObj ? editableObj.body : prev;
  });

  const handleSave = () => {
    onSave(title, body);
    setTitle('');
    setBody('');
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />
          <TextInput
            placeholder="Body"
            value={body}
            onChangeText={setBody}
            style={styles.input}
            multiline
          />
          <Button title="Save" onPress={handleSave} />
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: '80%',
  },
  input: {
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
  },
});

export default CustomModal;
