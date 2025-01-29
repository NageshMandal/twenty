import { useState } from 'react';
import { toast } from 'react-toastify';

import useFirebase from '../../../../hooks/firebase/useFirebase';
import { collection, doc } from 'firebase/firestore';
import { useAppSelector } from '../../../../hooks/redux/useStore';
import { authSelector } from '../../../../store/Auth';
import PersonalisationOptions, {
  FormData as PersonalisationOptionsFormData,
} from '../PersonalisationOptions';
import AisdrBuilder from '../Builder';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../../routes/path';

import FromScratch, {
  FormData as DefineIcpAndPersonaFormData,
} from '../DefineIcpAndPersona/FromScratch';

// If you’re using the new “cards” UI for step 0:
import styled from '@emotion/styled';
import { Section, H2Title, IconBuildingSkyscraper } from 'twenty-ui';
// eslint-disable-next-line no-restricted-imports
import {
  IconBrandSuperhuman,
  IconBrandWebflow,
  IconSwipe,
} from '@tabler/icons-react';
import { SettingsCard } from '@/settings/components/SettingsCard';
import { useTheme } from '@emotion/react';

// This container ensures the page can scroll if content grows taller than the viewport.
// Adjust the height/offset as necessary for your layout.
// eslint-disable-next-line @nx/workspace-styled-components-prefixed-with-styled
const PageContainer = styled.div`
  height: calc(
    100vh - 80px
  ); /* Example offset for a header; adjust as needed */
  overflow-y: auto;
  padding: 20px 20px;
`;

const StyledCardsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(6)};
  flex-wrap: wrap; /* optional if you want them to wrap on smaller screens */
`;

const StyledLinkButton = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const steps = [
  { name: 'Define ICP + PERSONA', value: 0 },
  { name: 'Personalisation Options', value: 1 },
  { name: 'Outreach Review', value: 2 },
];

type Data = {
  defineIcpAndPersona: DefineIcpAndPersonaFormData;
  personalisationOptions: PersonalisationOptionsFormData;
};

const AiSdrSetupPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [currentMethod, setCurrentMethod] = useState<number>(0);
  const [formData, setFormData] = useState<Data | null>(null);

  const { firestore } = useFirebase();
  const { userInfo } = useAppSelector(authSelector);
  const navigate = useNavigate();
  const theme = useTheme();

  // Save final data
  const handleSave = async (data: PersonalisationOptionsFormData) => {
    const dataToAdd = {
      ...formData,
      personalisationOptions: data,
    };

    // Using the user ID set to 5
    const userId = 5; // Set the user ID here directly

    const collectionRef = collection(firestore, 'aiSdrSetup');
    const docRef = doc(collectionRef, userId.toString()); // Use the hardcoded user ID

    try {
      // await setDoc(docRef, dataToAdd);
      console.log('datatoadd: ', dataToAdd);
      toast.success('Document written successfully');
      setCurrentMethod(0);
      setCurrentTab(0);

      navigate(paths.main.automation.create, {
        state: { isAisdrSetupLanding: true, aisdrData: dataToAdd },
      });
    } catch (error) {
      toast.error(error?.message ?? 'Document write failed');
    }
  };

  // Handle which method is chosen in step 0
  const handleCardClick = (formType: string) => {
    if (formType === 'persona') setCurrentMethod(1);
    else if (formType === 'account') setCurrentMethod(2);
    else if (formType === 'website') setCurrentMethod(3);
    else if (formType === 'reverse') setCurrentMethod(4);
  };

  return (
    <PageContainer>
      {/* --- Step Navigation at the TOP --- */}
      <div className="flex items-center justify-between py-10 border-b border-borderColor dark:border-borderColor-dark">
        <nav className="grid w-full grid-cols-3 justify-between text-30">
          {steps.map((step) => (
            <div
              key={step.name}
              className={`whitespace-nowrap border-b-2 py-16 px-1 text-sm font-medium flex justify-center ${
                step?.value === currentTab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400'
              }`}
            >
              <p className="text-18">{step.name}</p>
            </div>
          ))}
        </nav>
      </div>

      {/* --- Step 0 Content: Define ICP + PERSONA --- */}
      {currentTab === 0 && (
        <>
          {/* If user hasn't picked a method, show the new "cards" UI */}
          {!currentMethod ? (
            <Section style={{ padding: '30px 20px' }}>
              <H2Title
                title="Define ICP + PERSONA"
                description="How do you want to target your ICP?"
              />
              <StyledCardsContainer>
                <StyledLinkButton onClick={() => handleCardClick('persona')}>
                  <SettingsCard
                    Icon={
                      <IconBrandSuperhuman
                        size={theme.icon.size.lg}
                        stroke={theme.icon.stroke.sm}
                      />
                    }
                    title="By Persona"
                    description="Target your ICP By Persona"
                  />
                </StyledLinkButton>

                <StyledLinkButton onClick={() => handleCardClick('account')}>
                  <SettingsCard
                    Icon={
                      <IconBuildingSkyscraper
                        size={theme.icon.size.lg}
                        stroke={theme.icon.stroke.sm}
                      />
                    }
                    title="By Account Based Sales"
                    description="Target your ICP By Account Sales"
                  />
                </StyledLinkButton>

                <StyledLinkButton onClick={() => handleCardClick('website')}>
                  <SettingsCard
                    Icon={
                      <IconBrandWebflow
                        size={theme.icon.size.lg}
                        stroke={theme.icon.stroke.sm}
                      />
                    }
                    title="Website Visitors"
                    description="Target your ICP By Website Visitors"
                  />
                </StyledLinkButton>

                <StyledLinkButton onClick={() => handleCardClick('reverse')}>
                  <SettingsCard
                    Icon={
                      <IconSwipe
                        size={theme.icon.size.lg}
                        stroke={theme.icon.stroke.sm}
                      />
                    }
                    title="Uno-Reverse"
                    description="Target your ICP By Uno-Reverse"
                  />
                </StyledLinkButton>
              </StyledCardsContainer>
            </Section>
          ) : (
            // If user has picked a method, show the existing ICP form (FromScratch)
            <FromScratch
              selectedBlockValue={currentMethod}
              onNext={(data: DefineIcpAndPersonaFormData) => {
                setFormData({
                  defineIcpAndPersona: data,
                  personalisationOptions: formData?.personalisationOptions,
                });
                setCurrentTab(1);
              }}
              onPrevious={() => {
                setCurrentTab(0);
                setCurrentMethod(0);
              }}
            />
          )}
        </>
      )}

      {/* --- Step 1 Content: Personalisation Options --- */}
      {currentTab === 1 && (
        <PersonalisationOptions
          setCurrentTab={setCurrentTab}
          onSave={handleSave}
        />
      )}

      {/* --- Step 2 Content: Outreach Review (builder) --- */}
      {currentTab === 2 && <AisdrBuilder setCurrentTab={setCurrentTab} />}
    </PageContainer>
  );
};

export default AiSdrSetupPage;
