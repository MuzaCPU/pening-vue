import { db } from "./firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

const siswaCollection = collection(db, "siswa");
const newSiswaRef = doc(siswaCollection);

const createSiswa = async ({ namaDepan, namaBelakang, absen, kelas }) => {
  await setDoc(newSiswaRef, {
    namaDepan,
    namaBelakang,
    absen,
    kelas,
  });
  return newSiswaRef.id;
};

const getSiswa = async () => {
  const dataSiswa = [];
  const res = await getDocs(siswaCollection);
  res.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    dataSiswa.push(data);
  });
  return dataSiswa;
};

//

const hasilPreTestCollection = collection(db, "hasilPreTest");
const newPreTestRef = doc(hasilPreTestCollection);

const createHasilPreTest = async ({ idSiswa, nilai }) => {
  await setDoc(newPreTestRef, {
    idSiswa,
    nilai,
  });
  return newPreTestRef.id;
};

const getHasilPreTest = async () => {
  const dataHasilPreTest = [];
  const res = await getDocs(hasilPreTestCollection);
  res.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    dataHasilPreTest.push(data);
  });
  return dataHasilPreTest;
};

//

const hasilGayaBelajarCollection = collection(db, "hasilGayaBelajar");
const newHasilGayaBelajarRef = doc(hasilGayaBelajarCollection);

const createHasilGayaBelajar = async ({ idSiswa, gayaBelajar }) => {
  await setDoc(newHasilGayaBelajarRef, {
    idSiswa,
    gayaBelajar,
  });
  return newHasilGayaBelajarRef.id;
};

const getHasilGayaBelajar = async () => {
  const dataHasilGayaBelajar = [];
  const res = await getDocs(hasilGayaBelajarCollection);
  res.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    dataHasilGayaBelajar.push(data);
  });
  return dataHasilGayaBelajar;
};

//

const hasilPostTestCollection = collection(db, "hasilPostTest");
const newPostTestRef = doc(hasilPostTestCollection);

const createHasilPostTest = async ({ idSiswa, nilai }) => {
  await setDoc(newPostTestRef, {
    idSiswa,
    nilai,
  });
  return newPostTestRef.id;
};

const getHasilPostTest = async () => {
  const dataHasilPostTest = [];
  const res = await getDocs(hasilPostTestCollection);
  res.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    dataHasilPostTest.push(data);
  });
  return dataHasilPostTest;
};

//

const getSiswaTestData = async () => {
  const siswaTestData = [];

  const siswaRes = await getSiswa();
  const preTestRes = await getHasilPreTest();
  const gayaBelajarRes = await getHasilGayaBelajar();
  const postTestRes = await getHasilPostTest();

  let no = 1;

  for (let item of siswaRes) {
    const preTest = preTestRes.find((el) => el.idSiswa === item.id)?.nilai;
    const postTest = postTestRes.find((el) => el.idSiswa === item.id)?.nilai;
    const gayaBelajar = gayaBelajarRes.find(
      (el) => el.idSiswa === item.id,
    )?.gayaBelajar;

    if (
      preTest !== undefined &&
      postTest !== undefined &&
      gayaBelajar !== undefined
    ) {
      siswaTestData.push({
        no,
        id: item.id,
        nama: item.namaDepan + " " + item.namaBelakang,
        absen: item.absen,
        kelas: item.kelas,
        gayaBelajar: gayaBelajar,
        preTest: preTest,
        postTest: postTest,
      });
      no = no + 1;
    }
  }

  return siswaTestData;
};

export {
  createSiswa,
  getSiswa,
  createHasilPreTest,
  createHasilGayaBelajar,
  createHasilPostTest,
  getSiswaTestData,
};
