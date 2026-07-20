import {
  APIProvider,
  Circle,
  Map,
  Marker,
  Polygon,
  Polyline,
} from "@vis.gl/react-google-maps";
import { Container, SubPageHeader } from "../shared/components";

const API_KEY = "AIzaSyAEggSQoHOF9xmOxueka9UIwQsb0sUl8DI";

const libraryPosition = { lat: -12.123749, lng: -77.036078 };
const maleconPosition = { lat: -12.12456, lng: -77.03838 };
const polygon = [
  { lat: -12.119281, lng: -77.033697 },
  { lat: -12.119361, lng: -77.02936 },
  { lat: -12.11957, lng: -77.029296 },
  { lat: -12.122352, lng: -77.031399 },
  { lat: -12.120371, lng: -77.033643 },
];

const polilinea = [
  { lat: -12.123747, lng: -77.035925 },
  { lat: -12.124333, lng: -77.03597 },
  { lat: -12.124344, lng: -77.037443 },
];

const Explore = () => {
  return (
    <>
      <SubPageHeader title="Explorar" />
      <Container className="mt-10 mb-20">
        <section className="w-full h-125 shadow-lg">
          <APIProvider
            solutionChannel="GMP_devsite_samples_v3_rgmbasicmap"
            apiKey={API_KEY}
          >
            <Map
              defaultZoom={16}
              defaultCenter={libraryPosition}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
            >
              <Marker position={libraryPosition} title="Bookory" />
              <Marker
                position={maleconPosition}
                title="Malecón de Miraflores"
              />
              <Circle
                center={libraryPosition}
                radius={100}
                strokeColor="#FF0000"
                strokeOpacity={0.8}
                strokeWeight={2}
                fillColor="#FF0000"
                fillOpacity={0.3}
                clickeable={true}
                onClick={() => alert("Alrededores de Bookory")}
              />
              <Polygon
                paths={polygon}
                strokeColor="#fa8c17"
                strokeOpacity={0.8}
                strokeWeight={2}
                fillColor="#fa8c17"
                fillOpacity={0.3}
              />
              <Polyline
                path={polilinea}
                strokeColor="#000080"
                strokeOpacity={0.8}
                strokeWeight={4}
              />
            </Map>
          </APIProvider>
        </section>
      </Container>
    </>
  );
};

export default Explore;
