import Offre from "../offre_componenet/Offre";
import Sidebar from "../sidebar/Sidebar";
import "./stage.css";
import { Card, CardBody, Heading, Box, Stack, StackDivider, Text,  Divider } from '@chakra-ui/react';

function Stage({ handleChange, result }) {
  return (
    <Card className="combined-card" boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)">
      <CardBody>
        <Stack direction="row" divider={<StackDivider />} spacing="20">
          {/* First Card Content */}
          <Box flex="1">
            <Heading size="l" textTransform="uppercase">
              filtres
            </Heading>
            <Text pt="10" fontSize="sm"></Text>
            <div className="filters">
              <Sidebar handleChange={handleChange} result={result} />
            </div>
          </Box>

          {/* Second Card Content */}
          <Box flex="3" pb={'20px'}>
          {result.length >= 0 && (
    <Text size="xs" mb={'20px'}>
      {result.length} internships
    </Text>
  )}
            <Divider mb="20px" borderWidth="1px" borderColor={'black'}></Divider>
            {result.map((offer, index) => {
              return (
                <Offre
                  key={index}
                  {...offer.props}
                />
              );
            })}
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Stage;
