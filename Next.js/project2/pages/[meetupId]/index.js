import { useRouter } from 'next/router';
import { Fragment } from 'react';

import MeetupDetail from '../../components/meetups/MeetupDetail';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/320px-Stadtbild_M%C3%BCnchen.jpg',
    address: '342432 Some road, city, country',
  },
  {
    id: 'm2',
    title: 'sec meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/320px-Stadtbild_M%C3%BCnchen.jpg',
    address: '342432 Some road, city, country',
  },
];

const getData = (data, id) => {
  data.filter(data => data.id === id)
}


function MeetupDetails() {
  const router = useRouter();
  const meetupId = router.query.meetupId;
  const dataTmp = DUMMY_MEETUPS.filter((item) => item.id === meetupId)[0];
  console.log(dataTmp.id)

  return (
    <Fragment>
      <MeetupDetail
        id={dataTmp.id}
        img={dataTmp.image}
        title={dataTmp.title}
        address={dataTmp.address}
      />
    </Fragment>
  );
}

export default MeetupDetails;