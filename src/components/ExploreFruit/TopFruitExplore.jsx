import React from 'react';

const TopFruitExplore = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, 
      }}
    >
      <div
        style={{
          width: '600px',
          height: '700px',
          background: 'white',
          borderRadius: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px',
        }}
      >
        <div
          style={{
            color: '#485935',
            fontSize: 26,
            fontFamily: 'Poppins',
            fontWeight: '600',
            wordWrap: 'break-word',
            width: '100%',
          }}
        >
          Top Fruit of the Day
          <hr
            style={{
              borderTop: '3px solid black',
              width: '90%',
              marginTop: '10px',
            }}
          />
        </div>
        <div>
          <div className="flex">
            <img
              style={{
                width: '20%',
                height: '20%',
              }}
              src="https://s3-alpha-sig.figma.com/img/d705/f58f/52b8efb8273691ea0f4aeee9a65cb99f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PfCiQPEW4yjHYLNAtu2oM77Yo66rG753s4rbpdccTrm74H6hN4CvUhiKswOPnRwVa~WC0tSKTP9-euTy6Z8TZVk7ZHnOVgcS-G9vtDULaB2YYcmSSsM-I-fEGwUUcdYX55K23rzAbYydl8E7CoaLQvc6rwgIKwuSyJLk6DGRDtBj0kOgZg9MIiD9UrF-h6h~sIWJwGxtKmhiU3jp5nhfTWHudpFaK0bvv1UNtp34FQpgOfYR2-YtzoheRW0WgG04JIigQ-DBLfpxKNY~Ozdb-QEK44bI8Xim2JL5V0oXVb49TO1J~~aAs-uP-6el8nHWRLb42HJiSCRA803-Ix8iYA__"
            />
            <div
              style={{
                width: '80%',
                height: '80%',
                margin: '20px',
              }}
            >
              <div
                style={{
                  color: '#485935',
                  fontSize: 24,
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  wordWrap: 'break-word',
                }}
              >
                1. Strawberry
                <br />
                2. Golden Phoenix Durian
                <br />
                3. Cavendish Banana
              </div>
            </div>
          </div>
          <div
            style={{
              color: '#485935',
              fontSize: 26,
              fontFamily: 'Poppins',
              fontWeight: '600',
              wordWrap: 'break-word',
              width: '100%',
            }}
          >
            Top Fruit of the Week
            <hr
              style={{
                borderTop: '3px solid black',
                width: '90%',
                marginTop: '10px',
              }}
            />
          </div>
          <div className="flex">
            <img
              style={{
                width: '20%',
                height: '20%',
              }}
              src="https://s3-alpha-sig.figma.com/img/8cd4/44d8/a838557fc46d2939e1930c5b020da021?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VbohRbU~0aBEG3mdg6QxhgxzZl2T60FfhSUnkqJfpPb418-bquXktu8ruvYjJmQpExjHVgtCI2ie0oH67IeEpJBp8uY99AoNKJcxOF~kb53gt-7XU0jXszA7QJgbCZ2-XOB8e57llSSlIaua8VAVdUolpbLSpoERAXmq~HN5iW03Itl~BQsbi9~uEEqhs2iW4qUIBGk~vKjqi~oqbfQjeQ8nM-y4abWNAMj7U9nAwVTJuF6ijFs9xE0cLtvXP6tJ2RoR1HYSGBQXI0w-QMynCvPsVLTaPzGhSbQCPngvSes0QlretHstGWMDmGsjBi5aQCfGk6kIDowALtcWBzx82w__"
            />
            <div
              style={{
                width: '80%',
                height: '80%',
                margin: '20px',
              }}
            >
              <div
                style={{
                  color: '#485935',
                  fontSize: 24,
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  wordWrap: 'break-word',
                }}
              >
                1. Cavendish Banana
                <br />
                2. Golden Phoenix Durian
                <br />
                3. Red Spanish Pineapple
              </div>
            </div>
          </div>
          <div
            style={{
              color: '#485935',
              fontSize: 26,
              fontFamily: 'Poppins',
              fontWeight: '600',
              wordWrap: 'break-word',
              width: '100%',
            }}
          >
            Top Fruit of the Month
            <hr
              style={{
                borderTop: '3px solid black',
                width: '90%',
                marginTop: '10px',
              }}
            />
          </div>
          <div className="flex">
            <img
              style={{
                width: '20%',
                height: '20%',
              }}
              src="https://s3-alpha-sig.figma.com/img/8cd4/44d8/a838557fc46d2939e1930c5b020da021?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VbohRbU~0aBEG3mdg6QxhgxzZl2T60FfhSUnkqJfpPb418-bquXktu8ruvYjJmQpExjHVgtCI2ie0oH67IeEpJBp8uY99AoNKJcxOF~kb53gt-7XU0jXszA7QJgbCZ2-XOB8e57llSSlIaua8VAVdUolpbLSpoERAXmq~HN5iW03Itl~BQsbi9~uEEqhs2iW4qUIBGk~vKjqi~oqbfQjeQ8nM-y4abWNAMj7U9nAwVTJuF6ijFs9xE0cLtvXP6tJ2RoR1HYSGBQXI0w-QMynCvPsVLTaPzGhSbQCPngvSes0QlretHstGWMDmGsjBi5aQCfGk6kIDowALtcWBzx82w__"
            />
            <div
              style={{
                width: '80%',
                height: '80%',
                margin: '20px',
              }}
            >
              <div
                style={{
                  color: '#485935',
                  fontSize: 24,
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  wordWrap: 'break-word',
                }}
              >
                1. Cavendish Banana
                <br />
                2. Golden Phoenix Durian
                <br />
                3. Red Spanish Pineapple
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            left: '80%',
          }}
        >
          <div
            style={{
              width: 103,
              height: 52.27,
              left: 0,
              top: 0,
              position: 'absolute',
              borderRadius: 15,
              border: '1px #485935 solid',
              cursor: 'pointer',
            }}
            onClick={onClose}
          />
          <div
            style={{
              width: 62,
              height: 32,
              left: 20,
              top: 10,
              position: 'absolute',
              textAlign: 'center',
              color: '#485935',
              fontSize: 21,
              fontFamily: 'Poppins',
              fontWeight: '300',
              wordWrap: 'break-word',
              cursor: 'pointer',
            }}
            onClick={onClose}
          >
            Back
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFruitExplore;
