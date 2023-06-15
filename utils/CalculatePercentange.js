import { retrievePersonal, updatePercent } from "@/redux/slices/personal";
import { Rstore } from "@/redux/store/store";

const CalculatePercentage = () => {
  const percent = Rstore.getState().personal.percentage;
  const users = Rstore.getState().personal?.data?.resume;
  const personal = Rstore.getState().personal?.data;

  const skill =
    percent?.skills?.length <= users?.skills?.length
      ? percent?.skills?.percent
      : percent?.skills?.length / 2 === users?.skills?.length
      ? percent?.skills?.percent / 2
      : 0;

  const Experience =
    percent?.workExperince?.length <= users?.workExperience?.length
      ? percent?.workExperince?.percent
      : 0;

  const Education =
    percent?.education?.length <= users?.education?.length
      ? percent?.education?.percent
      : percent?.education?.length / 2 === users?.education?.length
      ? percent?.education?.percent / 2
      : 0;

  const Certificate =
    percent?.certificate?.length <= users?.certificateFileLocation?.length
      ? percent?.certificate?.percent
      : percent?.certificate?.length / 2 ===
        users?.certificateFileLocation?.length
      ? percent?.certificate?.percent / 2
      : 0;

  const persan =
    (personal?.about !== null ? 1 : 0) +
    (users?.languages?.length > 0 ? 1 : 0) +
    (users?.currentOffer !== undefined ? 1 : 0) +
    (personal?.jobTitle !== undefined ? 1 : 0) +
    (personal?.mobile !== undefined && personal?.mobile !== null ? 1 : 0);

  const persanRank =
    persan === percent?.personalInfo?.personal?.length
      ? percent?.personalInfo?.personal?.percent
      : 0;

  const countrs =
    (users?.location?.country !== undefined ? 1 : 0) +
    (users?.location?.state !== undefined ? 1 : 0) +
    (users?.location?.city !== undefined ? 1 : 0) +
    (users?.totalWorkExperience !== undefined ? 1 : 0);

  const countries =
    countrs === percent?.personalInfo?.countries?.length
      ? percent?.personalInfo?.countries?.percent
      : 0;

  const essen =
    (users?.notice !== undefined ? 1 : 0) +
    (users?.expectedSalary !== undefined ? 1 : 0) +
    (users?.currentSalary !== undefined ? 1 : 0) +
    (users?.salaryCurrency !== undefined ? 1 : 0) +
    (users?.workPrefence !== undefined ? 1 : 0);

  const essential =
    essen === percent?.personalInfo?.essent?.length
      ? percent?.personalInfo?.essent?.percent
      : 0;

  const finalPercent =
    skill +
    Experience +
    Education +
    Certificate +
    // Social +
    persanRank +
    countries +
    essential;

  Rstore.dispatch(updatePercent(finalPercent))
    .then(() => {
      Rstore.dispatch(retrievePersonal());
    })
    .catch(() => console.log("something went wrong"));
};

export default CalculatePercentage;
