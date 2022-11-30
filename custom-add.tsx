import { Box, Flex, Heading, Image, Link } from '@chakra-ui/react';
import { event } from '../lib/gtag';
function getPageSlug() {
  const pathname = (typeof window !== 'undefined' ? window : {} as any)?.location?.pathname || '';
  return pathname?.replace(/\//g, '');
}
export const CustomAd = () => {
  const slug = getPageSlug();
  if (slug !== 'devops') {
    return null;
  }

  return (
    <Link
      href='https://thenewstack.io/ebooks/devops/cloud-native-devops-2019/?utm_source=Roadmap.sh&utm_medium=Banner&utm_campaign=Roadmap+DevOps+Ebook'
      href='https://www.stormforge.io/ebook/getting-started-kubernetes-resource-management-optimization/?utm_medium=referral&utm_source=roadmap-sh&utm_campaign=ebook_get-started-k8s-resource-mgmt'
      id='custom-ad'
      pos='fixed'
      bottom='15px'
      right='20px'
      zIndex={999}
      display={['none', 'none', 'flex', 'flex']}
      display='flex'
      maxWidth='330px'
      bg='white'
      boxShadow='0 1px 4px 1px hsla(0, 0%, 0%, .1)'
@@ -31,23 +31,23 @@ export const CustomAd = () => {
      onClick={() => {
        event({
          category: 'SponsorClick',
          action: `TNS EBook Redirect`,
          label: `Clicked TNS EBook Link`
          action: `StormForge EBook Redirect`,
          label: `Clicked StormForge EBook Link`
        });
      }}
    >
      <Image
        src='https://i.imgur.com/fEKq19S.png'
        src='https://i.imgur.com/uNJWl4L.png'
        alt='Custom Logo'
        height={['100px', '100px', '100px', 'auto']}
        width='130'
        style={{ maxWidth: '130px', border: 'none' }}
      />
      <Flex as='span' flexDirection='column' justifyContent='space-between'>
        <Box as='span' p='10px'>
          <Heading as='span' fontSize='14px' mb='5px' display='block'>Free DevOps eBook</Heading>
          <Heading as='span' fontSize='14px' mb='5px' display='block'>Free Kubernetes eBook</Heading>
          <Box display='block' as='span' fontSize='13px' lineHeight={1.5} fontWeight={500} color='gray.500'>
            Learn all about doing DevOps the Cloud Native way with this free ebook from our partner, The New Stack
            Learn how to manage and optimize Kubernetes resources with this free eBook.
          </Box>
        </Box>
        <Box as='span'
             textAlign='center'
             fontWeight={600}
             fontSize='9px'
             letterSpacing='0.5px'
             textTransform='uppercase'
             padding='5px 10px'
             display={'block'}
             background='repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .025) 5px, hsla(0, 0%, 0%, .025) 10px) hsla(203, 11%, 95%, .4)'
        >
          Partner Content
        </Box>
      </Flex>
    </Link>
  );
};
