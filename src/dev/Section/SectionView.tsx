import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';
import { ViewProps } from '../../types';
import { SectionData, SectionSettings } from './Section';

const SectionView: React.FunctionComponent<
  ViewProps<SectionData, SectionSettings>
> = (props) => {
  const { data, settings } = props;
  return (
    <Box
      bgcolor={settings.backgroundColor}
      color={settings.color}
      mt={settings.marginTop || 0}
      mb={settings.marginBottom || 0}
      pt={settings.paddingTop || 0}
      pb={settings.paddingBottom || 0}
      textAlign={settings.textAlign}
    >
      <Container
        disableGutters={settings.containerDisableGutters}
        maxWidth={settings.containerMaxWidth}
      >
        <Typography variant={settings.titleVariant}>
          {data.title}
        </Typography>
        <ReactMarkdown>{data.body}</ReactMarkdown>
      </Container>
    </Box>
  );
};

export default SectionView;
