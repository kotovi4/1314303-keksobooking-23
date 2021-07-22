const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooserAvatar = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const fileChooserPhoto = document.querySelector('.ad-form__upload input[type=file]');
const upload = document.querySelector('.ad-form__photo');


fileChooserAvatar.addEventListener('change', () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      previewAvatar.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

fileChooserPhoto.addEventListener('change', () => {
  const file = fileChooserPhoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const previewPhoto = document.createElement('img');
      previewPhoto.style.display = 'flex';
      previewPhoto.style.maxWidth = '100%';
      previewPhoto.style.maxHeight = '100%';
      previewPhoto.style.height = 'auto';
      upload.append(previewPhoto);
      previewPhoto.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

export {
  previewAvatar,
  upload
};
