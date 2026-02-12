import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// types
type SettingItemType = 'link' | 'toggle';

interface SettingItem {
  id?: string;
  icon: string;
  color: string;
  label: string;
  type: SettingItemType;
}

interface SettingRowProps {
  item: SettingItem;
  children?: React.ReactNode;
}

interface SettingSection {
  header: string;
  icon: string;
  items: SettingItem[];
}

//  sections data
const SECTIONS: SettingSection[] = [
  {
    header: 'Account',
    icon: 'account-circle',
    items:[
      {
        icon: 'edit',
        color: '#007afe',
        label: 'Edit Profile',
        type: 'link',
      },
      {
        icon: 'lock',
        color: '#007afe',
        label: 'Change Password',
        type: 'link', 
      },
      {
        icon: 'subscriptions',
        color: '#007afe',
        label: 'Manage Subscriptions',
        type: 'link', 
      },
      {
        icon: 'lock',
        color: '#007afe',
        label: 'Push Notifications',
        type: 'toggle', 
      },
    ]
  },
  {
    
    header: 'Preferences',
    icon: 'settings',
    items: [
      {
        icon: 'language',
        color: '#fe9400',
        label: 'Language',
        type: 'link',
      },
      {
        id: 'darkMode',
        icon: 'dark-mode',
        color: '#007afe',
        label: 'Dark Mode',
        type: 'toggle',
      },
    ],
  },
  {
    header: 'Help',
    icon: 'help-circle',
    items: [
      {
        icon: 'info',
        color: '#8e8d91',
        label: 'About us',
        type: 'link',
      },
      {
        icon: 'shield',
        color: '#007afe',
        label: 'Privacy Policy',
        type: 'link',
      },
      {
        icon: 'description',
        color: '#007afe',
        label: 'Terms and Conditions',
        type: 'link',
      },
    ],
  },
  // {
  //   header: 'Content',
  //   icon: 'align-center',
  //   items: [
  //     {
  //       icon: 'save',
  //       color: '#32c759',
  //       label: 'Saved',
  //       type: 'link',
  //     },
  //     {
  //       icon: 'download',
  //       color: '#ffd254',
  //       label: 'Downloads',
  //       type: 'link',
  //     },
  //   ],
  // },
];

// Helper component for rendering each setting row
function SettingRow({ item, children }: SettingRowProps) {
  const [enabled, setEnabled] = React.useState(false);
  const onToggle = React.useCallback(() => setEnabled((s) => !s), []);

  return (
    <TouchableOpacity activeOpacity={item.type === 'link' ? 0.7 : 1}>
      <View style={styles.row}>
        <View style={[styles.rowIcon, { backgroundColor: item.color }]}> 
          <MaterialIcons name={item.icon as any} size={20} color="#fff" />
        </View>

        <Text style={styles.rowLabel}>{item.label}</Text>

        <View style={styles.rowRight}>
          {item.type === 'link' ? (
            <MaterialIcons name="chevron-right" size={24} color="#8e8d91" />
          ) : (
            <Switch value={enabled} onValueChange={onToggle} />
          )}
        </View>
      </View>
      {children}
    </TouchableOpacity>
  );
}


export default function SettingsScreen() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView style={ styles.contentContainer }> */}
        {/* <TouchableOpacity>
          <View>
            <TouchableOpacity>
              <View>
                <MaterialIcons name="account-circle" size={72} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        //Profile
        <View style={styles.profile}>
          <Text style={styles.profileName}>John Doe</Text>
        </View> */}
        {/* Sections */}
        {SECTIONS.map((section) => (
          <View key={section.header} style={ styles.section }>
            <Text style={styles.sectionHeader}> {section.header}</Text>
            
            <View style={styles.sectionCard}>
              {section.items.map((item,idx)=>(
                <View key={item.id ?? item.label}>
                  <SettingRow item={item}>
                    {idx!== section.items.length -1 && <View style={styles.divider} />}
                  </SettingRow>
                </View>
              ))}
            </View>
          </View>
        ))}
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

const styles =  StyleSheet.create({
  contentContainer:{
    paddingVertical:24,   
  },
  profile: {
    padding:24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    backgroundColor: '#808080'
  },
  profileName: {
    marginTop: 12,
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
  marginTop: 24,
  paddingHorizontal: 16,
},
sectionHeader: {
  color: '#8e8d91',
  fontSize: 13,
  marginBottom: 10,
},
sectionCard: {
  backgroundColor: '#1a1a1c',
  borderRadius: 12,
  overflow: 'hidden',
},
row: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 16,
  paddingHorizontal: 16,
},
rowIcon: {
  width: 32,
  height: 32,
  borderRadius: 16,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 12,
},
rowLabel: {
  flex: 1,
  color: '#fff',
  fontSize: 16,
},
rowRight: {
  marginLeft: 12,
  alignItems: 'flex-end',
  justifyContent: 'center',
},
divider: {
  height: StyleSheet.hairlineWidth,
  backgroundColor: '#2a2a2e',
  marginLeft: 60, // aligns divider after icon
},

});