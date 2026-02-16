import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import "../global.css";

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
      <View className="flex-row items-center py-4 px-4">
        <View className="w-8 h-8 rounded-full items-center justify-center mr-3" style={{ backgroundColor: item.color }}> 
          <MaterialIcons name={item.icon as any} size={20} color="#fff" />
        </View>

        <Text className="flex-1 text-white text-base">{item.label}</Text>

        <View className="ml-3 items-end justify-center">
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
    <SafeAreaView className="flex-1">
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
            <View key={section.header} className="mt-6 px-4">
              <Text className="text-[#8e8d91] text-[13px] mb-2.5"> {section.header}</Text>

              <View className="bg-[#1a1a1c] rounded-xl overflow-hidden">
                {section.items.map((item,idx)=>(
                  <View key={item.id ?? item.label}>
                    <SettingRow item={item}>
                      {idx!== section.items.length -1 && <View className="h-[1px] bg-[#2a2a2e] ml-[60px]" />}
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

// styles are handled via Tailwind classes (nativewind)